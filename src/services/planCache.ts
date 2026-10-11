import { FREE_PLAN, type Plan } from './access';

/** Without contact with the server for this long, a full plan waits for the next check. */
export const PLAN_OFFLINE_DAYS = 30;
const DAY_MS = 24 * 60 * 60 * 1000;

const isoDay = (d: Date) => d.toISOString().slice(0, 10);

/**
 * The plan the app applies now. The server's answer is cached for offline use; it lapses after
 * PLAN_OFFLINE_DAYS without a check, or after its own end date. The development switch is local.
 */
export function planInForce(plan: Plan, checkedAt: string | null, signedIn: boolean, now: Date): Plan {
  if (plan.tier === 'free' || plan.source === 'dev') return plan;
  // A purchase made on this device's store counts without an account; anything else needs one.
  if ((!signedIn && !isStorePlan(plan)) || !checkedAt) return FREE_PLAN;
  const age = now.getTime() - Date.parse(checkedAt);
  if (!(age <= PLAN_OFFLINE_DAYS * DAY_MS)) return FREE_PLAN;
  if (plan.validUntil && plan.validUntil < isoDay(now)) return FREE_PLAN;
  return plan;
}

/** The plan to store after the server answered: its plan, except that a local development plan stays. */
export const mergeServerPlan = (local: Plan, server: Plan): Plan => (local.source === 'dev' && server.tier === 'free' ? local : server);

/** The plan to store after signing out: a store purchase stays with the device (checked again at launch). */
export const planAfterSignOut = (local: Plan): Plan => (local.source === 'dev' || isStorePlan(local) ? local : FREE_PLAN);

const isStorePlan = (plan: Plan) => plan.source === 'store_ios' || plan.source === 'store_android';
