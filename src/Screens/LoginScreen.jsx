import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, ScreenWrapper, Title } from '../components';
import { useNavigation } from '@react-navigation/native';

import theme from '../styling/theme';

// ##############################################

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.content}>
        <Title title="Log in" />
        <Form type="login" navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
}

// ***********************************************

const { regular } = theme.borderRadius;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: regular,
    borderTopRightRadius: regular,
  },
});
