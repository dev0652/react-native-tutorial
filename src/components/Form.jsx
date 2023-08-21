import React, { useState } from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  View,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';

import theme from '../styling/theme';

// ##############################################

export default function Form({ type = 'registration' }) {
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [image, setImage] = useState(null);

  const [isInFocus, setIsInFocus] = useState(null);

  const onChangeName = (input) => setName(input);
  const onChangeEmail = (input) => setEmail(input);
  const onChangePassword = (input) => setPassword(input);

  const isLogin = type === 'login';

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const toggleShowPassword = () => setIsPasswordHidden(!isPasswordHidden);

  const [linkWidth, setLinkWidth] = useState(null);

  const onSwitchFormLinkPress = () => {};

  const onFormSubmitPress = () => {
    Alert.alert(
      'You submitted:',
      isLogin
        ? `Email: ${email}\nPassword: ${password}`
        : `Username: ${name} \nEmail: ${email}\nPassword: ${password}`
    );

    console.log(
      'You submitted:',
      isLogin
        ? `Email: ${email}\nPassword: ${password}`
        : `Username: ${name} \nEmail: ${email}\nPassword: ${password}`
    );

    !isLogin && setName('');
    setEmail('');
    setPassword('');
  };

  // const { container, fieldsWrapper, field, button, buttonText, showPasswordLink, linkText, showButtonWrapper, } = styles;

  return (
    <View style={styles.container}>
      <View style={styles.fieldsWrapper}>
        {!isLogin && (
          <TextInput
            style={styles.field(isInFocus === 'name')}
            onFocus={() => setIsInFocus('name')}
            onBlur={() => setIsInFocus(null)}
            placeholder="Username"
            placeholderTextColor={faded}
            onChangeText={onChangeName}
            value={name}
            enablesReturnKeyAutomatically // iOS
          />
        )}
        <TextInput
          style={styles.field(isInFocus === 'email')}
          onFocus={() => setIsInFocus('email')}
          onBlur={() => setIsInFocus(null)}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={faded}
          onChangeText={onChangeEmail}
          value={email}
          enablesReturnKeyAutomatically
        />
        {/* Wrapper */}
        <View style={styles.showButtonWrapper}>
          <TextInput
            style={[
              styles.field(isInFocus === 'password'),
              { paddingRight: linkWidth },
            ]}
            onFocus={() => setIsInFocus('password')}
            onBlur={() => setIsInFocus(null)}
            placeholderTextColor={faded}
            secureTextEntry={isPasswordHidden}
            placeholder="Password"
            onChangeText={onChangePassword}
            value={password}
            enablesReturnKeyAutomatically
          />

          <View
            style={styles.showPasswordLink}
            onLayout={(e) => setLinkWidth(e.nativeEvent.layout.width + 30)}
          >
            <Pressable onPress={toggleShowPassword}>
              <Text style={styles.linkText}>
                {isPasswordHidden ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.fieldsWrapper}>
        <Pressable onPress={onFormSubmitPress} style={styles.button}>
          <Text style={styles.buttonText}>
            {isLogin ? 'Log in' : 'Create an account'}
          </Text>
        </Pressable>

        <Pressable onPress={onSwitchFormLinkPress} style={styles.link}>
          <Text style={styles.linkText}>
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

const { accent, faded, fadedBorder, fieldBackground, link } = theme.colors;
const { small, button } = theme.borderRadius;
const { defaultFontSize } = theme;

const styles = StyleSheet.create({
  container: {},
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

Form.propTypes = {
  type: PropTypes.string,
};
