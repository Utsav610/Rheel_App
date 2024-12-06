import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HeaderView from '../components/HeaderView';
import {goBack} from '../navigation/RootNavigation';
import {colors} from '../constants/colors';
import {images} from '../constants/images';
import {ph, wp} from '../utils/ResponsiveScreen';
import {SCREEN_WIDTH} from '../constants/constantKey';
import FavoriteIcon from '../assets/images/FavoriteIcon';
import {fonts, fontSize} from '../constants/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropertyCardMarkerIcon from '../assets/images/PropertyCardMarkerIcon';
import PropertyDetailShare from '../assets/images/PropertyDetailShare';
import commonStyle from '../constants/commonStyle';
import HomeIcon from '../assets/images/HomeIcon';
import PropertyDetailHomeIcon from '../assets/images/PropertyDetailHomeIcon';
import PropertyCardBathIcon from '../assets/images/PropertyCardBathIcon';
import PropertyDetailBathIcon from '../assets/images/PropertyDetailBathIcon';
import LinearGradient from 'react-native-linear-gradient';
import PropertyDetailLiviIcon from '../assets/images/PropertyDetailLiviIcon';
import ReadMore from '@fawazahmed/react-native-read-more';
import PropertyDetailCameraIcon from '../assets/images/PropertyDetailCameraIcon';
import RightArrowIcon from '../assets/images/RightArrowIcon';
import PropertyDetailFloorplanIcon from '../assets/images/PropertyDetailFloorplanIcon';
import PropertyDetailVideoIcon from '../assets/images/PropertyDetailVideoIcon';
import CustomButton from '../components/CustomButton';
import PropertyDetailEmailIcon from '../assets/images/PropertyDetailEmailIcon';
import PropertyDetailWhathappIcon from '../assets/images/PropertyDetailWhathappIcon';
import PropertyDetailBedIcon from '../assets/images/PropertyDetailBedIcon';

const PropertyDetails = () => {
  const [photos, setPhotos] = useState(false);
  const [floorplan, setFloorPlan] = useState(false);
  const [toor, setToor] = useState(false);

  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        titleImg={true}
        isBack={true}
        onBackPress={() => goBack()}
      />
      <ScrollView style={styles.scrollContainer}>
        <View
          style={{
            marginHorizontal: ph(20),
            width: SCREEN_WIDTH / 1.12,
            marginTop: ph(16),
          }}>
          <Image
            // source={images.bannerImg}
            source={{
              uri: 'https://ideal.thewebtual.com/idealapp/internal/public/storage/chapter/1731496769619.webp',
            }}
            style={{
              borderWidth: 1,
              borderRadius: ph(30),
              borderColor: colors.border,
              aspectRatio: 16 / 9,
              resizeMode: 'cover',
              width: '100%',
            }}
          />
          <TouchableOpacity style={styles.favoriteIcon}>
            <FavoriteIcon />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginTop: ph(30),
            justifyContent: 'space-between',
            marginHorizontal: ph(20),
          }}>
          <View style={styles.propertyInfo}>
            <View style={styles.outerDetailCard}>
              <Icon name="circle" color={colors.minColor} />
              <Text style={[commonStyle.REGULAR_12, {color: colors.black}]}>
                For Sale
              </Text>
            </View>
            <View style={styles.outerDetailCard}>
              <Text style={[commonStyle.SEMIBOLD_24, {color: colors.black}]}>
                ₦100,000,000
              </Text>
            </View>
            <View style={styles.outerDetailCard}>
              <PropertyCardMarkerIcon />
              <Text
                style={[commonStyle.REGULAR_16, {color: colors.defaultText}]}>
                Kukwaba, Abuja, FCT
              </Text>
            </View>
            <Text style={[commonStyle.REGULAR_12, {color: colors.defaultText}]}>
              Added on:20/11/2024
            </Text>
          </View>
          <PropertyDetailShare />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: ph(28),
          }}>
          <View style={{alignItems: 'center'}}>
            <PropertyDetailHomeIcon />
            <Text style={[commonStyle.MEDIUM_14, {color: colors.defaultText}]}>
              Duplex
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <PropertyDetailBathIcon />
            <Text style={[commonStyle.MEDIUM_14, {color: colors.defaultText}]}>
              6 Bathroom
            </Text>
          </View>
        </View>
        <LinearGradient
          colors={['#d3d3d3', '#000', '#d3d3d3']} // Light at both ends and dark in the center
          start={{x: 0, y: 0}} // Gradient starts from the left
          end={{x: 1, y: 0}} // Gradient ends on the right
          style={styles.separatorLine}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{alignItems: 'center'}}>
            <PropertyDetailLiviIcon />
            <Text style={[commonStyle.MEDIUM_14, {color: colors.defaultText}]}>
              2 Living Room
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <PropertyDetailBedIcon />
            <Text style={[commonStyle.MEDIUM_14, {color: colors.defaultText}]}>
              6 Bed Room
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: ph(20), marginTop: ph(30)}}>
          <Text style={[commonStyle.SEMIBOLD_20, {color: colors.black}]}>
            Property Description
          </Text>
          {/* <Text
            style={[
              commonStyle.REGULAR_16,
              {color: colors.defaultText, marginTop: ph(10)},
            ]}>
            Discover the epitome of luxury and convenience with this stunning
            5-bedroom duplex in Kukwaba, ideally located adjacent to the city
            gate and just
          </Text> */}
          <ReadMore
            numberOfLines={4}
            style={[commonStyle.REGULAR_16, {color: colors.defaultText}]}
            seeMoreStyle={[commonStyle.REGULAR_16, {color: colors.minColor}]}
            seeLessStyle={[commonStyle.REGULAR_16, {color: colors.minColor}]}>
            {
              'Discover the epitome of luxury and convenience with this stunning 5-bedroom duplex in Kukwaba, ideally located adjacent to the city gate and just th this stunning 5-bedroom duplex in Kukwaba, ideally located adjacent to the city gate and just'
            }
          </ReadMore>
        </View>
        <TouchableOpacity
          style={[styles.commonButton, {marginTop: ph(24)}]}
          onPress={() => setPhotos(!photos)}>
          <View style={styles.innerbuttonView}>
            <PropertyDetailCameraIcon />
            <Text style={[commonStyle.SEMIBOLD_16, {color: colors.black}]}>
              Photos
            </Text>
          </View>
          <View style={[photos ? {transform: [{rotate: '90deg'}]} : null]}>
            <RightArrowIcon />
          </View>
        </TouchableOpacity>
        {photos ? (
          <View style={{margin: ph(20)}}>
            <Image source={images.bannerImg} />
          </View>
        ) : (
          <></>
        )}
        <View style={commonStyle.seperation}></View>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => setFloorPlan(!floorplan)}>
          <View style={styles.innerbuttonView}>
            <PropertyDetailFloorplanIcon />
            <Text style={[commonStyle.SEMIBOLD_16, {color: colors.black}]}>
              Floorplan
            </Text>
          </View>
          <View style={[floorplan ? {transform: [{rotate: '90deg'}]} : null]}>
            <RightArrowIcon />
          </View>
        </TouchableOpacity>
        <View style={commonStyle.seperation}></View>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => setToor(!toor)}>
          <View style={styles.innerbuttonView}>
            <PropertyDetailVideoIcon />
            <Text style={[commonStyle.SEMIBOLD_16, {color: colors.black}]}>
              Virtual Tours
            </Text>
          </View>
          <View style={[toor ? {transform: [{rotate: '90deg'}]} : null]}>
            <RightArrowIcon />
          </View>
        </TouchableOpacity>
        <View style={commonStyle.seperation}></View>
        <View style={styles.agentContainerView}>
          <Text style={[commonStyle.SEMIBOLD_20, {color: colors.black}]}>
            Agent
          </Text>
          <View style={styles.agentInnerView}>
            <View style={styles.agentProfileView}>
              <Image
                source={images.defaultProfileImg}
                style={{width: wp(50), height: wp(50)}}
              />
              <View>
                <Text style={[commonStyle.SEMIBOLD_16, {color: colors.black}]}>
                  Jackob Smith
                </Text>
                <Text
                  style={[commonStyle.MEDIUM_14, {color: colors.defaultText}]}>
                  Property Owner
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text
                style={[commonStyle.SEMIBOLD_16, {color: colors.defaultText}]}>
                View Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            gap:ph(20),
            marginHorizontal:ph(20),
            marginVertical:ph(28),
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
          }}>
          <CustomButton
            style={{
              flex: 1,
              backgroundColor: colors.white,
              borderWidth: 1,
              flexDirection: 'row',
              gap: ph(5),
            }}
            leftComponent={<PropertyDetailEmailIcon />}
            title="Agent"
            textStyle={{color: colors.defaultText}}
          />
          <CustomButton
          isLinear={true}
            linearStyle={{
              flex: 1
            }}
            linearbtnStyle={{
              alignItems:'center',
              flexDirection: 'row',
              gap: ph(5),
            }}
            leftComponent={<PropertyDetailWhathappIcon />}
            title="Agent"
            textStyle={{color: colors.white}}
          />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
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
  propertyInfo: {
    backgroundColor: colors.white,
  },
  outerDetailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ph(4),
  },
  separatorLine: {
    width: '80%', // Adjust the width to your preference
    height: 1, // Adjust the thickness of the line
    borderRadius: 1, // Optional: add rounded corners
    margin: ph(20),
    alignSelf: 'center',
  },
  commonButton: {
    marginHorizontal: ph(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerbuttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ph(8),
  },
  agentContainerView: {
    marginTop: ph(15),
    marginHorizontal: ph(20),
  },
  agentInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  agentProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ph(10),
    marginTop: ph(15),
  },
});
