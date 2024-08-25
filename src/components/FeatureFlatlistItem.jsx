import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';

export default function FeatureFlatlistItem({item, index}) {
  const {fill, backgroundImage, title, subTitle, transform, marginTop} = item;
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.container, {width: screenWidth}]}>
      <View style={styles.innerContainer}>
        <FastImage
          source={backgroundImage}
          style={[
            styles.imageBackground,
            {transform: [{scale: transform}], marginTop},
          ]}
          resizeMode={FastImage.resizeMode.contain}
        />
        <LinearGradient
          colors={['rgba(39, 38, 38, 0.264)', 'rgba(83, 83, 83, 0)']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.gradient}>
          <Text style={[styles.text, styles.subtitle]}>{subTitle}</Text>
          <Text style={[styles.text, styles.title]}>{title}</Text>
        </LinearGradient>
      </View>
      <View style={styles.dotsContainer}>
        {[1, 2, 3, 4].map(item => (
          <View
            key={item}
            style={[
              styles.dot,
              {
                backgroundColor:
                  fill === item ? colors.secondary : colors.transparent,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  innerContainer: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: '92%',
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    opacity: 0.8,
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 40,
  },
  text: {
    color: colors.text.primary,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Sunflower-Medium',
    fontSize: 10,
  },
  title: {
    fontFamily: 'Teko-Bold',
    fontSize: 18,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 5,
    gap: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
});
