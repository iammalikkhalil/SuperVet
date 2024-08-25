import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import components from '.';

export default function ComicsList({props}) {
  return (
    <View style={styles.container}>
      <components.Banner {...props.banner} />
      <FlatList
        data={props.data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <components.BuyComics {...item} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    overflow: 'hidden',
  },
  itemContainer: {
    margin: 5,
    marginTop: 20,
  },
});
