import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Triangle({
  height = 40,
  width = 40,
  color = 'white',
  rotation = 90,
  borderColor = 'transparent',
  borderWidth = 0,
}) {
  return (
    <View
      style={[
        styles.container,
        {transform: [{rotate: `${rotation}deg`}]},
        {borderColor: borderColor, borderWidth: borderWidth},
        {width: width, height: height},
      ]}>
      <View
        style={[
          styles.triangle,
          {
            borderLeftWidth: width / 2,
            borderRightWidth: width / 2,
            borderBottomWidth: height,
            borderBottomColor: color,
          },
        ]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
