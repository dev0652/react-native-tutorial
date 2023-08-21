import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../styling/theme';

// ##############################################

export default function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

// ***********************************************

const { primaryText } = theme.colors;

const styles = StyleSheet.create({
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

// ***********************************************

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
