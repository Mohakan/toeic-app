export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  AssessIntro: undefined;
  Assessment: undefined;
  Result: undefined;
  Method: undefined;
  Main: undefined;
  Lesson: { unitId: string };
  Review: undefined;
  MockTest: { mockId: string };
  Speaking: undefined;
  ReadAloud: { taskId: string; sim?: SimRun };
  Respond: { setId: string; sim?: SimRun };
  Opinion: { topicId: string; sim?: SimRun };
  Photo: { photoId: string; sim?: SimRun };
  PhotoCredits: undefined;
  /** The offer of the full plan; the reason says which locked content led here. */
  Paywall: { reason?: PaywallReason } | undefined;
  /** Account screens; `next` says where to go once signed in (by default, back). */
  Account: { mode: AccountMode; next?: 'assess' | 'onboarding' };
  /** Privacy policy, terms of use and sale, legal notice. */
  Legal: { doc: 'privacy' | 'terms' | 'notice' };
  /** Without runId: the simulation's introduction; with runId: the report of that run. */
  Simulation: { simId: string; runId?: string };
};

/** A Speaking simulation in progress: which one, which step, and the id shared by its attempts. */
export interface SimRun {
  simId: string;
  step: number;
  runId: string;
}

export type TabParamList = {
  Path: undefined;
  Words: undefined;
  Progress: undefined;
  Tests: undefined;
  Profile: undefined;
};

export type PaywallReason = 'unit' | 'mock' | 'speaking' | 'simulation' | 'trialEnd' | 'mockDone';

export type AccountMode = 'signup' | 'signin' | 'forgot' | 'reset' | 'delete';
