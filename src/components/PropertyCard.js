import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {ph, wp} from '../utils/ResponsiveScreen';
import {SCREEN_WIDTH} from '../constants/constantKey';
import {images} from '../constants/images';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FavoriteIcon from '../assets/images/FavoriteIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fonts, fontSize} from '../constants/fonts';
import PropertyCardMarkerIcon from '../assets/images/PropertyCardMarkerIcon';
import PropertyCardLiviIcon from '../assets/images/PropertyCardLiviIcon';
import PropertyCardBathIcon from '../assets/images/PropertyCardBathIcon';
import PropertyCardBedIcon from '../assets/images/PropertyCardBedIcon';

export default function PropertyCard(props) {
  const {
    item,
    onPress,
    title = '',
    image = null,
    isLock = false,
    description = '',
  } = props || {};
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.cardContainer]}
      onPress={onPress}
    >
      <View>
        <Image
          source={images.cardBackgroundImg}
          style={styles.cardImage}
        />
        <TouchableOpacity style={styles.favoriteIcon}>
          <FavoriteIcon />
        </TouchableOpacity>
        <View style={styles.propertyDetails}>
          <View style={styles.innerDetailCard}>
            <PropertyCardLiviIcon />
            <Text style={styles.detailText}>2 Livi</Text>
          </View>
          <View style={styles.innerDetailCard}>
            <PropertyCardBathIcon />
            <Text style={styles.detailText}>6 Bath</Text>
          </View>
          <View style={styles.innerDetailCard}>
            <PropertyCardBedIcon />
            <Text style={styles.detailText}>6 Beds</Text>
          </View>
        </View>
      </View>
      <View style={styles.propertyInfo}>
        <View style={styles.outerDetailCard}>
          <Icon name="circle" color={colors.minColor} />
          <Text style={styles.propertyText}>For Sale</Text>
        </View>
        <View style={styles.outerDetailCard}>
          <PropertyCardMarkerIcon />
          <Text style={styles.propertyLocation}>Kukwaba, Abuja, FCT</Text>
        </View>
        <View style={styles.outerDetailCard}>
          <Text style={styles.propertyPrice}>₦100,000,000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.backgroundContainer,
    borderRadius: wp(30),
    marginVertical: ph(15),
    borderWidth: 1,
    borderColor: colors.border,
    padding: ph(8),
  },
  cardImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: wp(30),
  },
  favoriteIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000073',
    padding: wp(8),
    borderRadius: wp(20),
    top: ph(10),
    right: ph(10),
    position: 'absolute',
  },
  propertyDetails: {
    position: 'absolute',
    bottom: ph(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  innerDetailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ph(4),
    backgroundColor: colors.white,
    paddingHorizontal: ph(12),
    paddingVertical: ph(4),
    borderRadius: ph(30),
  },
  detailText: {
    fontFamily: fonts.REGULAR,
    fontSize: fontSize.FS_10,
    color: colors.defaultText,
  },
  propertyInfo: {
    backgroundColor: colors.white,
    paddingVertical: ph(4),
    paddingHorizontal: ph(14),
    borderRadius: ph(18),
    borderWidth: wp(1),
    borderColor: colors.border,
    marginTop: ph(8),
  },
  outerDetailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ph(4),
  },
  propertyText: {
    fontFamily: fonts.REGULAR,
    fontSize: fontSize.FS_10,
    color: colors.black,
  },
  propertyLocation: {
    fontFamily: fonts.REGULAR,
    fontSize: fontSize.FS_12,
    color: colors.defaultText,
  },
  propertyPrice: {
    fontFamily: fonts.SEMIBOLD,
    fontSize: fontSize.FS_14,
    color: colors.black,
  },
});