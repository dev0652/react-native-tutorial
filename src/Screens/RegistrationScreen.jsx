import React from 'react';
import {
  // KeyboardAvoidingView,
  // Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar, Form } from '../components';

import theme from '../styling/theme';

// ##############################################

export default function RegistrationScreen() {
  const { container, title } = styles;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <Avatar />
        <Text style={title}>Register</Text>
        <Form />
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
    // maxHeight: '70%',
    // minHeight: '60%',

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
