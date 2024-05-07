import { create } from 'zustand'
export type Stage = {
    title: string;
    subTitle: string;
    index: number;
  };
type StageStore = {
    stage: Stage,
    replace: (payload:Stage) => void,
}

export const useStageStore = create<StageStore>((set) => ({
    stage: {"title": "Practice Area Configuration", "subTitle": "Import and Create", "index": 0},
    replace: (payload:Stage) => set({stage:payload}),
}));