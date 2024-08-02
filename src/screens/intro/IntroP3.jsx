import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  PanResponder,
} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import introImages from '../../assets/images/intro';

export default function IntroP3() {
  const navigation = useNavigation();
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Return true if user is swiping, not touching
        return Math.abs(gestureState.dx) > 20;
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Detect swipe left
        if (gestureState.dx > 50) {
          navigation.navigate('IntroP2');
        }
        // Detect swipe right
        if (gestureState.dx < -50) {
          navigation.navigate('IntroP4');
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <ImageBackground
        source={introImages.bg}
        resizeMode="cover"
        style={styles.bg}>
        <View style={[styles.miniContainer, styles.centerEnd, {height: '26%'}]}>
          <Image
            style={[styles.superVetComics, {opacity: 0}]}
            source={introImages.supervetP3}
          />
        </View>
        <View
          style={[
            styles.miniContainer,
            {justifyContent: 'flex-start', alignItems: 'center', height: '40%'},
          ]}>
          <Text style={styles.headingText}>
            Get your volumes From Comic Marketplace
          </Text>
          <Image
            style={styles.superVetComics}
            source={introImages.supervetP3}
          />
        </View>
        <View style={[styles.miniContainer, styles.spaceBetween]}>
          <View style={styles.btn}>
            <Text style={[styles.btnText, {fontFamily: 'bold'}]}>
              Read Comics
            </Text>
          </View>
          <Image style={styles.dotsImage} source={introImages.dot3} />
          <View style={styles.skipBtnContainer}>
            <TouchableOpacity
              style={styles.skipBtn}
              onPress={() => navigation.navigate('IntroP4')}>
              <Text style={[styles.btnText, {color: '#999999'}]}>Skip</Text>
              <Image style={styles.arrowImage} source={introImages.arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  centerEnd: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  miniContainer: {
    width: '100%',
    height: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  superVetComics: {
    width: 250,
    resizeMode: 'contain',
    shadowColor: 'crimson',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 10,
  },
  headingText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'black',
    textTransform: 'uppercase',
    width: 220,
    textAlign: 'center',
  },
  paraText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'regular',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(243, 36, 36, 1)',
    backgroundColor: 'rgba(243, 36, 36, 1)',
  },
  btnText: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'regular',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  dotsImage: {
    width: 50,
    height: 10,
    resizeMode: 'contain',
  },
  skipBtnContainer: {
    alignSelf: 'flex-end',
    paddingRight: 35,
    flexDirection: 'row',
    gap: 5,
  },
  skipBtn: {
    flexDirection: 'row',
    gap: 5,
  },
  arrowImage: {
    width: 10,
    resizeMode: 'contain',
  },
});
