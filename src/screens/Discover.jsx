import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Components from '../components';
import images from '../assets/images';
import colors from '../constants/colors';

export default function Discover() {
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
            h2Part1Text="Discioer"
            h2Part1Color="white"
            h2Part2Text=" Series"
            h2Part2Color={colors.secondary}
            discText="Now Read Most Popular!"
            detailAlignment="center"
            image={images.discover}
          />
          {Array.from({length: 6}).map((_, index) => (
            <Components.DiscoverListItem key={index} />
          ))}
          <Components.DiscoverListItem key={6} underlineWidth={0} />
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
