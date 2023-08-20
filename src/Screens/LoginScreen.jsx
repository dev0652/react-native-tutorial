import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Form } from '../components';

import theme from '../styling/theme';

// ##############################################

export default function LoginScreen() {
  const { container, title } = styles;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <Text style={title}>Log in</Text>
        <Form type="login" />
      </View>
    </TouchableWithoutFeedback>
  );
}

// ***********************************************

const { primaryText } = theme.colors;
const { regular } = theme.borderRadius;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '70%', // 550
    minHeight: '60%',
    maxHeight: '70%',

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
