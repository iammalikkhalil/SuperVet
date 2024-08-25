import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import images from '../assets/images';

export default function DiscoverListItem({
  image = images.SuperVetLandscape,
  title = 'Super Vet : The First Show',
  description = '9 Books',
  imageBorderColor = colors.secondary,
  imageBorderWidth = 1,
  underlineWidth = 1.5,
  underlineColor = colors.text.secondary,
}) {
  return (
    <View
      style={[
        styles.container,
        {borderBottomWidth: underlineWidth, borderBottomColor: underlineColor},
      ]}>
      <Image
        source={image}
        style={[
          styles.image,
          {borderColor: imageBorderColor, borderWidth: imageBorderWidth},
        ]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 30,
  },
  image: {
    width: 140,
    height: 105,
  },
  textContainer: {
    gap: 5,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Sunflower-Bold',
    color: colors.text.primary,
    fontSize: 14,
    flexWrap: 'wrap',
    maxWidth: 170,
  },
  description: {
    fontFamily: 'Sunflower-Light',
    color: colors.text.secondary,
    fontSize: 12,
    flexWrap: 'wrap',
    maxWidth: 170,
  },
});
