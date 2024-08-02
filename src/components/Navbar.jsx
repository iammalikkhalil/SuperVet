import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import icons from '../assets/icons';
import images from '../assets/images';

export default function Navbar({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <icons.sideMenuIcon width={16} height={16} />
        </TouchableOpacity>
        <View style={styles.midContainer}>
          <Image
            style={styles.superVetComicLogo}
            source={images.superVetComicLogo}
          />
        </View>
        <View style={styles.rightContainer}>
          <icons.downloadIcon width={16} height={16} />
          <icons.notificationIcon width={16} height={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(50, 48, 48, 1)',
  },
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  leftContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
  },
  midContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  rightContainer: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  superVetComicLogo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: -85,
  },
});
