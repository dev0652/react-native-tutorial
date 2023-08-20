import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import theme from '../styling/theme';

// ##############################################

export default function Avatar({ buttonAction = 'add', avatarUri = null }) {
  const { avatar, avatarAction } = styles;
  const isPictureLoaded = buttonAction === 'remove';

  return (
    <View style={avatar}>
      {avatarUri && <Image style={{ uri: avatarUri }} />}
      <Pressable style={avatarAction(isPictureLoaded)}>
        <AntDesign
          name="plus"
          size={15}
          color={isPictureLoaded ? faded : accent}
        />
      </Pressable>
    </View>
  );
}

// ***********************************************

Avatar.propTypes = {
  buttonAction: PropTypes.string,
  avatarUri: PropTypes.string,
};

// ***********************************************

const { accent, faded, fadedBorder } = theme.colors;
const { regular } = theme.borderRadius;

const styles = StyleSheet.create({
  avatar: {
    position: 'relative',

    width: 120,
    height: 120,
    borderRadius: 16,

    marginTop: -60,
    // marginBottom: 32,
    backgroundColor: '#F6F6F6',
    alignSelf: 'center',
  },
  avatarAction: (isPictureLoaded) => ({
    position: 'absolute',
    bottom: 15,
    right: -(regular / 2),

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    width: regular,
    height: regular,

    borderWidth: 1,
    borderRadius: regular / 2,
    borderColor: isPictureLoaded ? fadedBorder : accent,

    backgroundColor: 'white',

    transform: isPictureLoaded ? 'rotate(45deg)' : 'none',
  }),
});
