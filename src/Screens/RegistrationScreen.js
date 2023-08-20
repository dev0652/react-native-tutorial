import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Form } from '../components';

import theme from '../styling/theme';

// ##############################################

export default function RegistrationScreen() {
  const { container, title } = styles;

  return (
    <View style={container}>
      <Avatar />
      <Text style={title}>Register</Text>
      <Form />
    </View>
  );
}

// ***********************************************

const { primaryText } = theme.colors;
const { regular } = theme.borderRadius;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 550,
    height: '70%',

    paddingHorizontal: 16,

    backgroundColor: 'white',
    borderTopLeftRadius: regular,
    borderTopRightRadius: regular,
  },

  title: {
    // fontFamily: 'Roboto_500Medium',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 0.3,
    // wordWrap: 'break-word',

    textAlign: 'center',
    color: primaryText,

    marginBottom: 32,
  },
});
