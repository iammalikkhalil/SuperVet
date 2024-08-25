import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import Components from '../components';
import {CharactersData, CharHeadData, TeamsData} from '../constants/data';

export default function Characters() {
  const screenWidth = Dimensions.get('window').width;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (flatListRef.current && CharHeadData.length > 0) {
        setCurrentIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % CharHeadData.length;
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          return nextIndex;
        });
      }
    }, 1500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <Components.Background />
      <ScrollView style={styles.foreground}>
        <View style={{width: '100%', height: 200, marginBottom: 10}}>
          <FlatList
            ref={flatListRef}
            data={CharHeadData}
            renderItem={({item, index}) => (
              <View style={{width: screenWidth, height: 200}}>
                <Components.TextOnImage key={index} {...item} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
        <View style={{width: '100%', marginVertical: 5}}>
          <Components.Banner bannerText="Featured Characters" buttonText="" />
          <FlatList
            data={CharactersData}
            renderItem={({item, index}) => (
              <View style={{marginTop: 20, marginHorizontal: 6}}>
                <Components.Character key={index} {...item} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
        <View style={{width: '100%', marginVertical: 5}}>
          <Components.Banner
            bannerText="Characters list"
            buttonText="see all"
          />
          <FlatList
            data={CharactersData}
            renderItem={({item, index}) => (
              <View style={{marginTop: 20, marginHorizontal: 6}}>
                <Components.Character key={index} {...item} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
        <View style={{width: '100%', marginVertical: 5}}>
          <Components.Banner bannerText="Team list" buttonText="see all" />
          <FlatList
            data={TeamsData}
            renderItem={({item, index}) => (
              <View style={{marginTop: 20, marginHorizontal: 6}}>
                <Components.Team key={index} {...item} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
        <View style={{width: '100%', marginVertical: 5}}>
          <Components.Banner bannerText="Villains" buttonText="see all" />
          <FlatList
            data={CharactersData}
            renderItem={({item, index}) => (
              <View style={{marginTop: 20, marginHorizontal: 6}}>
                <Components.Character key={index} {...item} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
      </ScrollView>
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
