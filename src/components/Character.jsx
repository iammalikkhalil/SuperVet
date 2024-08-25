import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import images from '../assets/images';

export default function Character({
  size = 1,
  scale = 0,
  marginTop = 0,
  marginLeft = 0,
  color = colors.secondary,
  image = null,
  name = '',
}) {
  const width = 100 * size;
  return (
    <View style={{width}}>
      <View
        style={[styles.imageContainer, {height: width, borderColor: color}]}>
        <LinearGradient
          colors={['rgba(92, 239, 68, 0)', color]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={[styles.gradient, {width}]}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{scale}],
              marginTop,
              marginLeft,
            }}
          />
        </LinearGradient>
      </View>
      <Text style={styles.characterText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    overflow: 'hidden',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  characterText: {
    textAlign: 'center',
    fontFamily: 'Sunflower-Bold',
    paddingVertical: 5,
    fontSize: 12,
    textTransform: 'uppercase',
  },
});
