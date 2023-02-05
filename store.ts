import create from 'zustand';

interface SelectContentState {
  resultScore: number;
  resultNumber: number[];
  resultArr: (select: number[]) => void;
  increaseScore: (state: number) => void;
  resetScore: () => void;
  resetArr: () => void;
}

export const useStore = create<SelectContentState>((set) => ({
  resultScore: 0,
  resultNumber: [],
  resultArr: (select) => set((state) => ({ ...state, resultNumber: select })),
  increaseScore: () => set((state) => ({ resultScore: state.resultScore + 5 })),
  resetScore: () => set((state) => ({ resultScore: (state.resultScore = 0) })),
  resetArr: () => set((state) => ({ resultNumber: (state.resultNumber = []) })),
}));
