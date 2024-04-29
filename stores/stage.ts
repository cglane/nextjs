import { create } from 'zustand'
export type Stage = {
    title: string;
    index: number;
  };
type StageStore = {
    stage: Stage,
    replace: (payload:Stage) => void,
    // remove: () => void,
    // removeAll: () => void
}

export const useStageStore = create<StageStore>((set) => ({
    stage: {"title": "Practice Area Configuration", "index": 0},
    replace: (payload:Stage) => set({stage:payload}),
    // remove: () => set({}),
    // removeAll: () => set({ }),
}));