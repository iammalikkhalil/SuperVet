import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Components from '../components';
import {
  NewSuperComicsData,
  SuperComicsData,
  VideoComicsData,
  DrPsychoComicsData,
  DrWolfComicsData,
  NoNameComics,
} from '../constants/data';

export default function Featured() {
  return (
    <>
      <Components.Background />
      <View style={styles.foreground}>
        <ScrollView>
          <Components.FeaturedFlatlist />
          <Components.ComicsList props={NewSuperComicsData} />
          <Components.ComicsList props={SuperComicsData} />
          <Components.ComicsList props={VideoComicsData} />
          <Components.ComicsList props={DrWolfComicsData} />
          <Components.ComicsList props={DrPsychoComicsData} />
          <Components.ComicsList props={NoNameComics} />
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
});
