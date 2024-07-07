import {create} from 'zustand';

type Mode = 'dark' | 'light';

interface ColorModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const useColorModeStore = create<ColorModeState>(set => ({
  mode: 'light',
  // mode: 'dark',
  setMode: (mode: Mode) => set({mode}),
}));

export default useColorModeStore;
