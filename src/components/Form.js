import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../styling/theme';

// ##############################################

export default function Form({ type = 'registration' }) {
  const isLogin = type === 'login';
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const toggleShowPassword = () => setIsPasswordHidden(!isPasswordHidden);

  const {
    container,
    fieldsWrapper,
    field,
    username,
    button,
    buttonText,
    showPasswordLink,
    linkText,
    showButtonWrapper,
  } = styles;

  return (
    <View style={container}>
      <View style={fieldsWrapper}>
        {!isLogin && (
          <TextInput
            style={[field, username]}
            placeholder="Username"
            placeholderTextColor={faded}
            selectionColor={accent}
          />
        )}
        <TextInput
          style={field}
          keyboardType="email-address"
          placeholder="Email"
          // onFocus={ }
          placeholderTextColor={faded}
          selectionColor={accent}
        />
        <View style={showButtonWrapper}>
          <TextInput
            style={field}
            placeholderTextColor={faded}
            selectionColor={accent}
            secureTextEntry={isPasswordHidden}
            placeholder="Password"
          />

          <Pressable onPress={toggleShowPassword} style={showPasswordLink}>
            <Text style={linkText}>{isPasswordHidden ? 'Show' : 'Hide'}</Text>
          </Pressable>
        </View>
      </View>

      <View style={fieldsWrapper}>
        <Pressable onPress={onPressFunction} style={button}>
          <Text style={buttonText}>
            {isLogin ? 'Log in' : 'Create an account'}
          </Text>
        </Pressable>

        <Pressable onPress={onPressFunction} style={link}>
          <Text style={linkText}>
            {isLogin
              ? "Don't have an account? Register"
              : 'Already have an account? Log in'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

// ***********************************************

Form.propTypes = {
  type: PropTypes.string,
};

// ***********************************************

const { accent, faded, fadedBorder, fieldBackground, link } = theme.colors;
const { small } = theme.borderRadius;
const { defaultFontSize } = theme;

const styles = StyleSheet.create({
  container: { fontSize: 16 },
  button: {
    borderRadius: 25,
    backgroundColor: accent,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: defaultFontSize,
  },

  linkText: {
    textAlign: 'center',
    color: link,
    fontSize: defaultFontSize,
  },
  fieldsWrapper: {
    gap: 16,
    marginBottom: 43,
  },
  showButtonWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  showPasswordLink: {
    position: 'absolute',
    right: 16,
  },
  field: {
    height: 50,
    width: '100%',
    backgroundColor: fieldBackground,
    borderColor: fadedBorder,
    borderRadius: small,
    borderWidth: 1,
    padding: 16,
    fontSize: defaultFontSize,
  },
  username: {},
  email: {},
  pass: {},
});

// ***********************************************

const onPressFunction = () => {};
