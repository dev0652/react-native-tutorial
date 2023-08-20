import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// import { useFonts, Roboto_4               00Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
// import * as SplashScreen from 'expo-splash-screen';

import bgImage from './public/images/photo-bg.png';

import { RegistrationScreen, LoginScreen } from './src/Screens';

// ##############################################

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const { bg } = styles;

  // const [fontsLoaded] = useFonts({
  //   Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <ImageBackground source={bgImage} resizeMode="cover" style={bg}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
// ***********************************************

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
});
