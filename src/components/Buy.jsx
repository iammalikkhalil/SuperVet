import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Components from '.';
import colors from '../constants/colors';
import Icons from '../assets/icons';

export default function Buy({
  h1 = '',
  h2 = '',
  description = [],
  btnLeft = [],
  btnRight = [],
  rent = '',
  rating = null,
  totalRatings = null,
  image = null,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {image && (
          <Components.BuyComics
            itemHeight={1.1}
            itemWidth={1.1}
            backgroundImage={image}
            imageBorderWidth={1}
          />
        )}
        <View style={styles.detailContainer}>
          {(h1 || h2) && (
            <View style={styles.p7}>
              {h1 && (
                <Text style={styles.headingText}>
                  {h1}
                  {h2 ? '  :' : null}
                </Text>
              )}
              {h2 && <Text style={styles.headingText}>{h2}</Text>}
            </View>
          )}
          {description.length > 0 &&
            description.map((item, index) => (
              <View key={index} style={styles.p7}>
                {item.heading && (
                  <Text style={styles.discHeading}>{item.heading}</Text>
                )}
                {item.description && (
                  <Text style={styles.discText}>{item.description}</Text>
                )}
              </View>
            ))}

          {rating !== null && (
            <View style={styles.ratingContainer}>
              {Array.from({length: 5}).map((_, index) =>
                index < rating ? (
                  <Icons.starFill key={index} width={15} height={15} />
                ) : (
                  <Icons.starOutline key={index} width={15} height={15} />
                ),
              )}
              {totalRatings !== null && (
                <Text style={styles.ratingText}>{`(${totalRatings})`}</Text>
              )}
            </View>
          )}
          {rent && (
            <View style={styles.rentContainer}>
              <Text style={styles.rentText}>Rental By:</Text>
              <Text style={styles.rentText}>{rent}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnSubContainer}>
          {btnLeft.map((btn, index) => (
            <Components.Btn key={index} {...btn} />
          ))}
        </View>
        <View style={styles.btnSubContainer}>
          {btnRight.map((btn, index) => (
            <Components.Btn key={index} {...btn} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    gap: 20,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  detailContainer: {
    width: '60%',
  },
  p7: {
    paddingVertical: 7,
    gap: 3,
  },
  headingText: {
    fontSize: 16,
    fontFamily: 'Sunflower-Bold',
    color: colors.text.primary,
    maxWidth: '90%',
  },
  discHeading: {
    fontSize: 14,
    fontFamily: 'Sunflower-Bold',
    color: colors.text.secondary,
    maxWidth: '100%',
  },
  discText: {
    fontSize: 12,
    fontFamily: 'Sunflower-Light',
    color: colors.text.secondary,
    maxWidth: '100%',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    paddingVertical: 7,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Sunflower-Light',
    color: colors.text.secondary,
    maxWidth: '100%',
    marginTop: 3,
  },
  rentContainer: {
    flexDirection: 'row',
    gap: 2,
    alignSelf: 'flex-end',
  },
  rentText: {
    fontSize: 10,
    fontFamily: 'Sunflower-Medium',
    color: colors.status.success,
    maxWidth: '100%',
    opacity: 0.8,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSubContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
  },
});
