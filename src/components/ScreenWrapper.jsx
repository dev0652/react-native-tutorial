import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

import bgImage from '../../public/images/photo-bg.png';

// ##############################################

export default function ScreenWrapper({ children }) {
  return (
    <SafeAreaView style={[{ flex: 1 }, StyleSheet.absoluteFill]}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-120}
            style={styles.container}
          >
            {children}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
// ***********************************************

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

// ***********************************************

ScreenWrapper.propTypes = {
  children: PropTypes.node,
};
