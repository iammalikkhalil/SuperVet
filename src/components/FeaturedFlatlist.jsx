import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import components from '.';

const data = [
  {
    id: '1',
    title: 'rEAD SUPER COMICS',
    subTitle: 'WANT TO EARN?',
    fill: 1,
    backgroundImage: images.ivy1,
    transform: 3.5,
    marginTop: -15,
  },
  {
    id: '2',
    title: 'dr.ivy sea queen',
    subTitle: 'New Comic series',
    fill: 2,
    backgroundImage: images.ivy2,
    transform: 2.8,
    marginTop: 105,
  },
  {
    id: '3',
    title: 'New Comic series',
    subTitle: 'dr.x the outsider',
    fill: 3,
    backgroundImage: images.ivy3,
    transform: 3,
    marginTop: 130,
  },
  {
    id: '4',
    title: 'a psucho can be a doc ?',
    subTitle: 'what do ou think',
    fill: 4,
    backgroundImage: images.ivy4,
    transform: 2.8,
    marginTop: 40,
  },
];

export default function FeaturedFlatlist() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={components.FeatureFlatlistItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item.id}
        onScrollAnimationEnd
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
    overflow: 'hidden',
  },
});
