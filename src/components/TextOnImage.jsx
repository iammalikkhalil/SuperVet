import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import images from '../assets/images';
import colors from '../constants/colors';

export default function TextOnImage({
  h1Part1Text = '',
  h1Part2Text = '',
  h2Part1Text = '',
  h2Part2Text = '',
  discText = '',
  h1Part1Color = colors.text.primary,
  h1Part2Color = colors.text.primary,
  h2Part1Color = colors.text.primary,
  h2Part2Color = colors.text.primary,
  discColor = colors.text.primary,
  image = images.SuperVetLandscape,
  detailAlignment = 'center',
  scale = 1,
  marginTop = 0,
  marginLeft = 0,
  opacity = 1,
}) {
  const detailPaddingRight = detailAlignment === 'center' ? 25 : 0;
  const detailPaddingLeft = detailAlignment === 'center' ? 0 : 30;
  const gradientColor =
    opacity == 1 ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0)';

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={[
          styles.fill,
          {transform: [{scale}], marginTop, marginLeft, opacity: 0.6},
        ]}
      />
      <LinearGradient
        colors={[gradientColor, 'rgba(83, 83, 83, 0)']}
        start={{x: 0.5, y: 1}}
        end={{x: 0.5, y: 0}}
        style={[
          styles.fill,
          styles.gradient,
          {
            alignItems: detailAlignment,
            paddingLeft: detailPaddingLeft,
            paddingRight: detailPaddingRight,
          },
        ]}>
        <View style={styles.detail}>
          <View style={styles.h1}>
            <Text style={[styles.h1Text, {color: h1Part1Color}]}>
              {h1Part1Text}
            </Text>
            <Text style={[styles.h1Text, {color: h1Part2Color}]}>
              {h1Part2Text}
            </Text>
          </View>
          <View style={styles.h2}>
            <Text style={[styles.h2Text, {color: h2Part1Color}]}>
              {h2Part1Text}
            </Text>
            <Text style={[styles.h2Text, {color: h2Part2Color}]}>
              {h2Part2Text}
            </Text>
          </View>
          <Text style={[styles.discText, {color: discColor}]}>{discText}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: 200,
    overflow: 'hidden',
  },
  fill: {
    width: '100%',
    height: 200,
    position: 'absolute',
  },
  gradient: {
    justifyContent: 'center',
  },
  detail: {
    justifyContent: 'center',
  },
  h1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  h2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  h1Text: {
    fontSize: 14,
    fontFamily: 'Sunflower-Light',
    textTransform: 'capitalize',
  },
  h2Text: {
    fontSize: 24,
    fontFamily: 'Sunflower-Bold',
    textTransform: 'uppercase',
  },
  discText: {
    fontSize: 7,
    textAlign: 'right',
    fontFamily: 'Sunflower-Medium',
    textTransform: 'capitalize',
  },
});
