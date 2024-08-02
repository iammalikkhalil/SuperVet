import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DrawerItem = ({label, top, bottom, IconComponent, onPress, focused}) => {
  const color = focused ? '#FDBC17' : '#fff';
  const font = focused ? 'Urbanist-Medium' : 'Urbanist-Regular';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={onPress}>
        {IconComponent ? (
          <IconComponent width={30} height={30} style={styles.icon} />
        ) : (
          <View style={{width: 30, height: 30}} />
        )}
        <View style={styles.labelContainer}>
          <Text
            style={{
              color: '#4EE806',
              fontFamily: 'Urbanist-Medium',
              fontSize: 10,
              alignSelf: 'flex-end',
            }}>
            {top}
          </Text>
          <Text style={[styles.label, {color: color, fontFamily: font}]}>
            {label}
          </Text>
          <Text
            style={{
              color: '#4EE806',
              fontFamily: 'Urbanist-Medium',
              fontSize: 10,
              alignSelf: 'flex-end',
            }}>
            {bottom}
          </Text>
        </View>
      </TouchableOpacity>
      <LinearGradient
        colors={['rgba(255, 254, 254, 0)', '#FFA800', 'rgba(255, 254, 254, 0)']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.gradientBorder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '80%',
    gap: 20,
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
  gradientBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
  },
});

export default DrawerItem;
