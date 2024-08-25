import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import images from '../assets/images';

export default function Team({
  size = 1,
  scale1 = 3.3,
  marginTop1 = 110,
  marginLeft1 = -10,
  image1 = images.ivy,
  scale2 = 2.9,
  marginTop2 = 80,
  marginLeft2 = 40,
  image2 = images.drWolf,
  scale3 = 2.8,
  marginTop3 = 80,
  marginLeft3 = 40,
  image3 = null,
  color = colors.status.success,
  name = 'Team 5',
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
          {image3 ? (
            <Image
              source={image3}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                transform: [{scale: scale3}],
                marginTop: marginTop3,
                marginLeft: marginLeft3,
                position: 'absolute',
              }}
            />
          ) : null}

          <Image
            source={image2}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{scale: scale2}],
              marginTop: marginTop2,
              marginLeft: marginLeft2,
              position: 'absolute',
            }}
          />
          <Image
            source={image1}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{scale: scale1}],
              marginTop: marginTop1,
              marginLeft: marginLeft1,
              position: 'absolute',
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
