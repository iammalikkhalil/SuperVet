import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Banner({
  bannerText = 'New Super Comics',
  buttonText = 'SEE ALL',
  onPress = () => {},
  gradientColors = [colors.secondary, 'rgba(0, 0, 0, 0)'],
}) {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={[
        styles.gradient,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 8,
        },
      ]}>
      <Text
        style={{
          color: colors.text.primary,
          fontFamily: 'Urbanist-Bold',
          textTransform: 'uppercase',
          fontSize: 14,
        }}>
        {bannerText}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: colors.text.primary,
            fontFamily: 'Urbanist-Bold',
            textTransform: 'uppercase',
            fontSize: 14,
          }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
