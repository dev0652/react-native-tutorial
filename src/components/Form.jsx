import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../styling/theme';

// ##############################################

export default function Form({ type = 'registration' }) {
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [image, setImage] = useState(null);

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const onChangeName = (input) => setName(input);
  const onChangeEmail = (input) => setEmail(input);
  const onChangePassword = (input) => setPassword(input);

  const isLogin = type === 'login';

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const toggleShowPassword = () => setIsPasswordHidden(!isPasswordHidden);

  const [linkWidth, setLinkWidth] = useState(null);

  const {
    container,
    fieldsWrapper,
    field,
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
            style={field(isNameFocused)}
            placeholder="Username"
            placeholderTextColor={faded}
            onChangeText={onChangeName}
            value={name}
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
        )}
        <TextInput
          style={field(isEmailFocused)}
          keyboardType="email-address"
          placeholder="Email"
          // onFocus={ }
          placeholderTextColor={faded}
          selectionColor={accent}
          onChangeText={onChangeEmail}
          value={email}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
        <View style={showButtonWrapper}>
          <TextInput
            style={[field(isPasswordFocused), { paddingRight: linkWidth }]}
            placeholderTextColor={faded}
            selectionColor={accent}
            secureTextEntry={isPasswordHidden}
            placeholder="Password"
            onChangeText={onChangePassword}
            value={password}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />

          <View
            style={showPasswordLink}
            onLayout={(event) =>
              setLinkWidth(event.nativeEvent.layout.width + 30)
            }
          >
            <Pressable onPress={toggleShowPassword}>
              <Text style={linkText}>{isPasswordHidden ? 'Show' : 'Hide'}</Text>
            </Pressable>
          </View>
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
const { small, button } = theme.borderRadius;
const { defaultFontSize } = theme;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column-reverse',
  },
  button: {
    borderRadius: button,
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
  field: (isFocused) => ({
    height: 50,
    width: '100%',
    backgroundColor: isFocused ? 'white' : fieldBackground,
    borderColor: isFocused ? accent : fadedBorder,
    borderRadius: small,
    borderWidth: 1,
    padding: 16,
    fontSize: defaultFontSize,
  }),
});

// ***********************************************

const onPressFunction = () => {};
