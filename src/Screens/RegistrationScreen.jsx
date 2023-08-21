import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Form, ScreenWrapper } from '../components';

import theme from '../styling/theme';

// ##############################################

export default function RegistrationScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.content}>
        <Avatar />
        <Text style={styles.title}>Register</Text>
        <Form />
      </View>
    </ScreenWrapper>
  );
}

// ***********************************************

const { primaryText } = theme.colors;
const { regular } = theme.borderRadius;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: regular,
    borderTopRightRadius: regular,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 0.3,
    // wordWrap: 'break-word',
    textAlign: 'center',
    color: primaryText,

    marginVertical: 32,
  },
});
