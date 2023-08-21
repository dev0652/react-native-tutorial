import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Form } from '../components';

import theme from '../styling/theme';
import bgImage from '../../public/images/photo-bg.png';

// ##############################################

export default function LoginScreen() {
  // const { container, title } = styles;

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
            keyboardVerticalOffset={-150}
            style={styles.container}
          >
            <View style={styles.content}>
              <Text style={styles.title}>Log in</Text>
              <Form type="login" />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// ***********************************************

const { primaryText } = theme.colors;
const { regular } = theme.borderRadius;

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { width: '100%', flex: 1, justifyContent: 'flex-end' },
  content: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: regular,
    borderTopRightRadius: regular,
  },
  title: {
    // fontFamily: 'Roboto_500Medium',
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 0.3,
    // wordWrap: 'break-word',
    textAlign: 'center',
    color: primaryText,

    marginVertical: 32,
  },
});
