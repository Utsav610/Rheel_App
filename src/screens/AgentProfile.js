import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HeaderView from '../components/HeaderView';
import {goBack, navigate} from '../navigation/RootNavigation';
import {colors} from '../constants/colors';
import {ph, wp} from '../utils/ResponsiveScreen';
import {images} from '../constants/images';
import {SCREEN_WIDTH} from '../constants/constantKey';
import commonStyle from '../constants/commonStyle';
import CustomButton from '../components/CustomButton';
import PropertyCard from '../components/PropertyCard';
import OwnerProfileStarIcon from '../assets/images/OwnerProfileStarIcon';
import PropertyDetailWhathappIcon from '../assets/images/PropertyDetailWhathappIcon';
import PropertyDetailEmailIcon from '../assets/images/PropertyDetailEmailIcon';

const AgentProfile = () => {
  const cardWidth = SCREEN_WIDTH / 1.3 + ph(18);
  const reviceCard = SCREEN_WIDTH / 2.3;
  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        // titleImg={true}
        titleText="Owner Profile"
        isBack={true}
        onBackPress={() => goBack()}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.ProfileImgView}>
          <Image
            source={images.defaultProfileImg}
            style={{width: SCREEN_WIDTH / 2.8, height: SCREEN_WIDTH / 2.8}}
          />
        </View>
        <Text
          style={[
            commonStyle.SEMIBOLD_16,
            {color: colors.black, textAlign: 'center', marginTop: ph(15)},
          ]}>
          Jackob Smith
        </Text>
        <Text
          style={[
            commonStyle.SEMIBOLD_16,
            {color: colors.defaultText, textAlign: 'center'},
          ]}>
          Property Owner
        </Text>
        <Text
          style={[
            commonStyle.SEMIBOLD_16,
            {color: colors.black, marginTop: ph(27), marginHorizontal: ph(20)},
          ]}>
          Current Properties Listings{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: ph(15),
            marginHorizontal: ph(20),
            marginTop: ph(15),
          }}>
          <CustomButton
            isLinear={true}
            linearStyle={{
              paddingVertical: ph(7),
              paddingHorizontal: ph(30),
            }}
            linearbtnStyle={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: ph(5),
            }}
            title="Selling"
            textStyle={{color: colors.white}}
          />
          <CustomButton
            style={{
              paddingVertical: ph(7),
              paddingHorizontal: ph(30),
              backgroundColor: colors.white,
              borderWidth: 1,
              flexDirection: 'row',
              gap: ph(5),
            }}
            title="Renting"
            textStyle={{color: colors.defaultText}}
          />
        </View>

        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardWidth}
          decelerationRate="fast"
          scrollEventThrottle={16}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListHeaderComponent={<View style={styles.listPadding} />}
          ListFooterComponent={<View style={styles.listPadding} />}
          renderItem={({item}) => (
            <PropertyCard
              onPress={() => navigate(routeNames.PropertyDetails)}
              cardContainerStyle={{marginTop: ph(20)}}
            />
          )}
        />
        <Text
          style={[
            commonStyle.SEMIBOLD_16,
            {color: colors.black, marginTop: ph(5), marginHorizontal: ph(20)},
          ]}>
          Review
        </Text>
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: ph(10)}}
          snapToInterval={reviceCard}
          decelerationRate="fast"
          scrollEventThrottle={16}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListHeaderComponent={<View style={styles.listPadding} />}
          ListFooterComponent={<View style={styles.listPadding} />}
          renderItem={({item}) => (
            <View style={styles.reviewCardContainer}>
              <View style={styles.innerCardContainer}>
                <Image
                  source={images.defaultProfileImg}
                  style={{width: wp(50), height: wp(50)}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(2),
                    marginTop: ph(5),
                  }}>
                  <OwnerProfileStarIcon />
                  <Text style={commonStyle.BOLD_13}>5</Text>
                </View>
                <Text
                  style={[
                    commonStyle.BOLD_14,
                    {color: colors.defaultText, marginTop: ph(7)},
                  ]}>
                  Wade Warren
                </Text>
                <Text
                  style={[
                    commonStyle.REGULAR_10,
                    {
                      color: '#8C8C8C',
                      flexWrap: 'wrap',
                      flex: 1,
                      textAlign: 'center',
                    },
                  ]}>
                  Jackob Smith helped us find the perfect apartment in record
                  time! Highly professional and easy to work with.
                </Text>
              </View>
            </View>
          )}
        />
        <View
          style={{
            gap: ph(20),
            marginHorizontal: ph(20),
            marginVertical: ph(28),
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
              flex: 1,
            }}
            linearbtnStyle={{
              alignItems: 'center',
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

export default AgentProfile;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  ProfileImgView: {
    marginTop: ph(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: ph(3),
    borderColor: colors.minColor,
    borderWidth: wp(3),
    borderRadius: SCREEN_WIDTH / 2.8,
  },
  itemSeparator: {
    width: wp(12),
    height: wp(12),
  },
  listPadding: {
    width: wp(15),
    height: ph(15),
  },
  reviewCardContainer: {
    width: SCREEN_WIDTH / 2.5,
    paddingHorizontal: ph(10),
    paddingVertical: ph(14),
    borderWidth: wp(1),
    borderColor: colors.seperation,
    borderRadius: wp(24),
  },
  innerCardContainer: {
    alignItems: 'center',
  },
});
