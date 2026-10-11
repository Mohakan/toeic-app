import { useEffect, useRef } from 'react';
import { FREE_PLAN } from '../services/access';
import { mergeServerPlan } from '../services/planCache';
import { purchases, type PurchaseOutcome } from '../services/purchases';
import { useApp } from './AppState';

/**
 * Keeps the plan in line with the device's store: at launch, a quiet restore re-checks the purchase
 * (and attaches it to the account when signed in), and purchases that finish outside a request
 * (interrupted, approved later) still open the plan. Returns the function that applies an outcome.
 */
export function usePurchaseOutcome() {
  const { data, update } = useApp();
  const plan = useRef(data.plan);
  useEffect(() => {
    plan.current = data.plan;
  });
  return (outcome: PurchaseOutcome) => {
    if (outcome.kind === 'purchased') update({ plan: mergeServerPlan(plan.current, outcome.plan), planCheckedAt: new Date().toISOString() });
  };
}

export function PurchaseSync() {
  const { data, ready, update } = useApp();
  const apply = usePurchaseOutcome();
  const latest = useRef({ data, apply, update });
  useEffect(() => {
    latest.current = { data, apply, update };
  });

  useEffect(() => {
    if (!ready || !purchases.available) return;
    const off = purchases.onPurchase((outcome) => latest.current.apply(outcome));
    purchases.restore({ quiet: true }).then((outcome) => {
      const { data: current, apply: applyNow, update: set } = latest.current;
      applyNow(outcome);
      // A store plan with no purchase left on this device's store (refund, other store) ends here.
      const storePlan = current.plan.source === 'store_ios' || current.plan.source === 'store_android';
      if (outcome.kind === 'nothing' && storePlan && !current.account) set({ plan: FREE_PLAN, planCheckedAt: null });
    });
    return off;
  }, [ready]);

  return null;
}
