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

export default function IntroP4() {
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
          navigation.navigate('IntroP3');
        }
        // Detect swipe right
        // if (gestureState.dx < -50) {
        //     navigation.navigate('IntroP3');
        // }
      },
    }),
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <ImageBackground
        source={introImages.bg}
        resizeMode="cover"
        style={styles.bg}>
        <View style={[styles.miniContainer, styles.centerEnd, {opacity: 0}]}>
          <Image
            style={styles.superVetComics}
            source={introImages.supervetP2}
          />
        </View>
        <View style={[styles.miniContainer, {gap: 50}]}>
          <Text style={styles.headingText}>
            Let’s skyrocket your Wallet with ComicFi
          </Text>
          <Text style={styles.paraText}>Connect Your Metamask </Text>
        </View>
        <View style={[styles.miniContainer, styles.spaceBetween]}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Main')}>
            <Text style={[styles.btnText, {fontFamily: 'bold'}]}>
              Connect Wallet
            </Text>
          </TouchableOpacity>
          <Image style={styles.dotsImage} source={introImages.dot4} />
          <View style={styles.skipBtnContainer}>
            <TouchableOpacity disabled style={styles.skipBtn}>
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
    width: 200,
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
    width: 200,
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
    borderColor: 'rgba(246, 191, 47, 1)',
    backgroundColor: 'rgba(246, 191, 47, 1)',
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
    opacity: 0,
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
