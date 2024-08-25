import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Components from '../components';
import images from '../assets/images';
import colors from '../constants/colors';
import {PopularData} from '../constants/data';

export default function Popular() {
  return (
    <>
      <Components.Background />
      <View style={styles.foreground}>
        <ScrollView>
          <Components.TextOnImage
            h1Part1Text="High On"
            h1Part1Color="white"
            h1Part2Text=" Demand"
            h1Part2Color={colors.secondary}
            h2Part1Text="Most"
            h2Part1Color="white"
            h2Part2Text=" Popular"
            h2Part2Color={colors.secondary}
            discText="Now Read Most Popular!"
            detailAlignment="center"
            image={images.discover}
          />
          {PopularData.map((element, i) => {
            return <Components.Buy key={i} {...element} />;
          })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  foreground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  imageBackground: {
    width: '100%',
    height: 200,
    top: 0,
    marginBottom: 5,
  },
});
