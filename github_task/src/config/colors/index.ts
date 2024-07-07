import useColorModeStore from '../../store/colors'; // Assuming this is where you define your Zustand store
import lightColors from './colors.light';
import darkColors from './colors.dark';

function useColors() {
  const {mode} = useColorModeStore(); // Using useColorModeStore within a custom hook
  return mode === 'dark' ? darkColors : lightColors;
}

export default useColors;
