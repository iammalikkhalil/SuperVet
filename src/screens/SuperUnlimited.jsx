import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Components from '../components';
import {
  NewSuperBundleData,
  SuperBundleData,
  DrPsychoBundleData,
  DrWolfBundleData,
} from '../constants/data';
import images from '../assets/images';

export default function SuperUnlimited() {
  return (
    <>
      <Components.Background />
      <View style={styles.foreground}>
        <ScrollView>
          <Image
            source={images.SuperVetUnlimited}
            style={[styles.imageBackground]}
          />
          <Components.ComicsList props={NewSuperBundleData} />
          <Components.ComicsList props={SuperBundleData} />
          <Components.ComicsList props={DrPsychoBundleData} />
          <Components.ComicsList props={DrWolfBundleData} />
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
