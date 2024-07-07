import {create} from 'zustand';

interface StoreState {
  repositories: Repository[];
}

const useStore = create<StoreState>(set => ({
  repositories: [],
  setRepositories: (repositories: any[]) => set({repositories}),
}));

export default useStore;
