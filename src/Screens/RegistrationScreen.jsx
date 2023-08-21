import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Form, ScreenWrapper, Title } from '../components';
import { useNavigation } from '@react-navigation/native';

import theme from '../styling/theme';

// ##############################################

export default function RegistrationScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.content}>
        <Avatar />
        <Title title="Register" />
        <Form navigation={navigation} />
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
