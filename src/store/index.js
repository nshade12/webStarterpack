import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useStore = create(devtools(immer((set) => {
  return {
    // Define your state and actions here
    count: 0,
    increment: () => set((draftState) => { draftState.count += 1; }, false, 'count/increment'),
    decrement: () => set((draftState) => { draftState.count -= 1; }, false, 'count/decrement'),
  };
})));

export default useStore;
