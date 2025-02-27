import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

import { Routes } from './src/routes';
import { Load } from './src/components/Load/Load';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold
  })

  return (
    <>
      {
        !fontsLoaded
        ? <Load />
        : <Routes />
      }
    </>
  );
}