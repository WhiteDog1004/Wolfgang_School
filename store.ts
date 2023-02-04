import create from 'zustand';

interface SelectContentState {
  resultScore: number;
  resultNumber: number[];
  resultArr: (select: number[]) => void;
  increaseScore: (state: number) => void;
}

export const useStore = create<SelectContentState>((set) => ({
  resultScore: 0,
  resultNumber: [],
  resultArr: (select) => set((state) => ({ ...state, resultNumber: select })),
  increaseScore: () => set((state) => ({ resultScore: state.resultScore + 5 })),
}));
