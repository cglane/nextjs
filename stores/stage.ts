import { create } from 'zustand'
export type Stage = {
    title: string;
    subTitle: string;
    index: number;
  };
type StageStore = {
    stage: Stage,
    replace: (payload:Stage) => void,
    // remove: () => void,
    // removeAll: () => void
}

export const useStageStore = create<StageStore>((set) => ({
    // TODO: Make i18n
    stage: {"title": "Practice Area Configuration", "subTitle": "Import and Create", "index": 0},
    replace: (payload:Stage) => set({stage:payload}),
    // remove: () => set({}),
    // removeAll: () => set({ }),
}));