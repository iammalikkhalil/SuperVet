import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../constants/colors'; // Ensure this is correctly imported
import images from '../assets/images';

const Btn = ({
  title,
  onPress = null,
  containerStyle,
  textStyle,
  dollar = false,
}) => {
  const disabled = onPress == null;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {dollar ? (
        <Image source={images.dollar} style={{width: 15, height: 15}} />
      ) : null}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.text.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 1,
    height: 22,
    paddingHorizontal: 15,
  },
  text: {
    marginTop: 7,
    fontFamily: 'Sunflower-Bold',
    fontSize: 8,
    color: colors.text.primary,
    textTransform: 'uppercase',
    minWidth: 10,
    minHeight: 15,
  },
});

export default Btn;
