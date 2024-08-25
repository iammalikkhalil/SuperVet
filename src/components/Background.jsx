import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import components from '.';
import images from '../assets/images';
import LinearGradient from 'react-native-linear-gradient';

export default function Background() {
  return (
    <>
      <Image
        source={images.drawerBackground}
        resizeMode="repeat"
        style={[styles.fill]}
      />
      <Image
        source={images.comicsBack}
        resizeMode="contain"
        style={[
          styles.fill,
          {
            opacity: 0.3,
            transform: [{rotate: '270deg'}, {scale: 2}],
          },
        ]}
      />

      <LinearGradient
        colors={['rgba(13, 19, 167, 0.39)', 'rgba(1, 9, 29, 0.5)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.fill}>
        <Image
          source={images.drBruceEnvEmpty}
          style={[
            styles.fill,
            {
              opacity: 0.5,
            },
          ]}
        />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  fill: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
