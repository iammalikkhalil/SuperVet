import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import images from '../assets/images';
import colors from '../constants/colors';
import Components from '.';
import Icons from '../assets/icons';

export default function BuyComics({
  itemWidth = 1,
  itemHeight = 1,
  iconSize = 35,
  backgroundImage = null,
  backgroundImage2 = null,
  backgroundImage3 = null,
  imageBorderWidth = 0,
  imageBorderColor = colors.secondary,
  isNew = false,
  isVideo = false,
  title = '',
  subtitle = '',
  price = '',
  priceText = 'Buy',
  priceTextColor = colors.status.success,
  bundle = false,
}) {
  // const blockWidth = 100;
  const imageWidth = 100 * itemWidth;
  const width = bundle ? 130 * itemWidth : imageWidth;
  // const blockWidth = (Dimensions.get('window').width / 3.9) * itemWidth;
  // const width = bundle
  //   ? (Dimensions.get('window').width / 3.1) * itemWidth
  //   : blockWidth;

  const height = 140 * itemHeight;
  const showDetailSection = title || subtitle || price;
  const ExtraBlockSize = imageWidth * 0.25;

  return (
    <View style={[styles.container, {width: width}]}>
      <View style={[styles.imageContainer]}>
        {bundle ? (
          backgroundImage ? (
            <View
              style={[
                {
                  height: height,
                  width: width,
                  justifyContent: 'center',
                },
              ]}>
              {/* image 1 */}
              {backgroundImage3 ? (
                <Image
                  source={backgroundImage3}
                  style={[
                    styles.image,
                    {
                      height: height * 0.8,
                      width: imageWidth * 0.8,
                      position: 'absolute',
                      alignSelf: 'flex-end',
                      borderWidth: imageBorderWidth,
                      borderColor: imageBorderColor,
                    },
                  ]}
                />
              ) : null}

              {/* image 2 */}

              {backgroundImage2 ? (
                <Image
                  source={backgroundImage2}
                  style={[
                    styles.image,
                    {
                      height: height * 0.9,
                      width: imageWidth * 0.9,
                      position: 'absolute',
                      marginLeft: ExtraBlockSize,
                      borderWidth: imageBorderWidth,
                      borderColor: imageBorderColor,
                    },
                  ]}
                />
              ) : null}

              {/* image 3 */}
              {backgroundImage ? (
                <Image
                  source={backgroundImage}
                  style={[
                    styles.image,
                    {
                      height: height,
                      width: imageWidth,
                      position: 'absolute',
                      borderWidth: imageBorderWidth,
                      borderColor: imageBorderColor,
                    },
                  ]}
                />
              ) : null}
            </View>
          ) : (
            <View
              style={[
                {
                  height: height,
                  width: width,
                  justifyContent: 'center',
                },
              ]}>
              {/* image 1 */}

              <View
                style={[
                  styles.comingSoonContainer,
                  {
                    height: height * 0.8,
                    width: imageWidth * 0.8,
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    borderWidth: imageBorderWidth,
                    borderColor: imageBorderColor,
                  },
                ]}>
                <Icons.lockOpen
                  width={iconSize * 0.7}
                  height={iconSize * 0.7}
                />
                <Text style={styles.comingSoonText}>Coming Soon</Text>
              </View>

              {/* image 2 */}

              <View
                style={[
                  styles.comingSoonContainer,
                  {
                    height: height * 0.9,
                    width: imageWidth * 0.9,
                    position: 'absolute',
                    marginLeft: ExtraBlockSize,
                    borderWidth: imageBorderWidth,
                    borderColor: imageBorderColor,
                  },
                ]}>
                <Icons.lockOpen
                  width={iconSize * 0.7}
                  height={iconSize * 0.7}
                />
                <Text style={styles.comingSoonText}>Coming Soon</Text>
              </View>

              {/* image 3 */}
              <View
                style={[
                  styles.comingSoonContainer,
                  {
                    height: height,
                    width: imageWidth,
                    position: 'absolute',
                    borderWidth: imageBorderWidth,
                    borderColor: imageBorderColor,
                  },
                ]}>
                <Icons.lockOpen
                  width={iconSize * 0.7}
                  height={iconSize * 0.7}
                />
                <Text style={styles.comingSoonText}>Coming Soon</Text>
              </View>
            </View>
          )
        ) : backgroundImage ? (
          (console.log('Background image is present'),
          (
            <Image
              source={backgroundImage}
              style={[
                styles.image,
                {
                  height: height,
                  borderWidth: imageBorderWidth,
                  borderColor: imageBorderColor,
                },
              ]}
            />
          ))
        ) : (
          (console.log('Background image is not present'),
          (
            <View
              style={[
                styles.comingSoonContainer,
                {
                  height: height,
                  borderWidth: imageBorderWidth,
                  borderColor: imageBorderColor,
                },
              ]}>
              <Icons.lockOpen width={iconSize * 0.7} height={iconSize * 0.7} />
              <Text style={styles.comingSoonText}>Coming Soon</Text>
            </View>
          ))
        )}

        {isNew && (
          <View style={styles.newContainer}>
            <Text style={styles.newText}>New</Text>
          </View>
        )}
        {isVideo && (
          <View style={[styles.videoContainer]}>
            <View
              style={[
                styles.videoCircle,
                {
                  width: iconSize,
                  height: iconSize,
                  borderRadius: iconSize * 2,
                  borderWidth: iconSize * 0.05,
                  paddingLeft: iconSize * 0.1,
                },
              ]}>
              <Components.Triangle
                width={iconSize * 0.37}
                height={iconSize * 0.37}
              />
            </View>
          </View>
        )}
      </View>

      {showDetailSection && (
        <View style={[styles.detailContainer]}>
          {title && <Text style={styles.detailHeading}>{title}</Text>}
          <View style={styles.detailDiscContainer}>
            {subtitle && <Text style={styles.detailsDisc}>{subtitle}</Text>}
            {price && (
              <View style={styles.priceContainer}>
                <Image source={images.dollar} style={styles.dollarImage} />
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.price}>-</Text>
                <Text style={[styles.price, {color: priceTextColor}]}>
                  {priceText}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },
  imageContainer: {},
  image: {
    width: '100%',
  },
  comingSoonContainer: {
    backgroundColor: '#0C0901',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  comingSoonText: {
    color: colors.text.primary,
    fontFamily: 'Sunflower-Medium',
    textTransform: 'capitalize',
    fontSize: 10,
    textAlign: 'center',
  },
  newContainer: {
    position: 'absolute',
  },
  newText: {
    color: colors.text.primary,
    fontFamily: 'Sunflower-Medium',
    textTransform: 'uppercase',
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: colors.status.error,
    borderBottomRightRadius: 6,
    width: 'auto',
    fontSize: 6,
    textAlign: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoCircle: {
    borderColor: colors.text.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  detailContainer: {
    paddingHorizontal: 3,
  },
  detailHeading: {
    fontFamily: 'Urbanist-Black',
    textTransform: 'uppercase',
    flexWrap: 'wrap',
    fontSize: 7,
    color: colors.text.primary,
  },
  detailDiscContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  detailsDisc: {
    fontFamily: 'Urbanist-Regular',
    textTransform: 'uppercase',
    flexWrap: 'wrap',
    fontSize: 6,
    color: colors.text.primary,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  dollarImage: {
    width: 7,
    height: 7,
  },
  price: {
    fontFamily: 'Urbanist-Black',
    textTransform: 'uppercase',
    flexWrap: 'wrap',
    fontSize: 6,
    color: colors.text.primary,
  },
});
