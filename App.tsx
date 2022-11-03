import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { 
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import { Routes } from './src/Routes';
import theme from './src/Global/Styles/theme';
export default function App() {
  const [ fontsIsLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if(!fontsIsLoading){
   return  <AppLoading />
  }
  return (
    <>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
    </>
  );
}


