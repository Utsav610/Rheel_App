import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import HeaderView from '../../components/HeaderView';
import {goBack, navigate} from '../../navigation/RootNavigation';
import {colors} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {ph, wp} from '../../utils/ResponsiveScreen';
import commonStyle from '../../constants/commonStyle';
import {SCREEN_WIDTH} from '../../constants/constantKey';
import routeNames from '../../constants/routeNames';
import PropertyCard from '../../components/PropertyCard';

const Favorite = () => {
  const buttonData = [
    {type: '1', title: 'For Sell'},
    {type: '2', title: 'To Rent'},
    {type: '3', title: 'Availability'},
  ];
  const cardWidth = SCREEN_WIDTH / 1.3 + ph(18);
  const [selectedBtn, setSelectedBtn] = useState('1');
  const isGuest = false;

  const handlePress = type => {
    // let btntype = type;
    // // console.log('btntype' ,btntype)
    // setSelectedBtn(
    //   prev =>
    //     prev.includes(btntype)
    //       ? prev.filter(btn => btn !== btntype) // Remove if exists
    //       : [...prev, btntype], // Add if not exists
    // );
    setSelectedBtn(type)
  };
  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        // titleImg={true}
        titleText="Favorite"
        isBack={true}
        onBackPress={() => goBack()}
      />
      {isGuest ? (
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={['#0A2F1E', '#118368', '#0A2F1E']}
            style={styles.modalStyle}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.innerModalView}>
              <Text style={[commonStyle.SEMIBOLD_20, {color: colors.white}]}>
                Unlock More with an Account!
              </Text>
              <Text
                style={[
                  commonStyle.REGULAR_16,
                  {
                    textAlign: 'center',
                    marginTop: ph(15),
                    color: '#BFBFBF',
                    flexWrap: 'wrap',
                    flex: 1,
                  },
                ]}>
                Sign up now to explore this feature and enjoy personalized
                property recommendations, save your favorites, and get real-time
                updates.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: ph(34),
                  marginTop: ph(15),
                }}>
                <TouchableOpacity>
                  <Text
                    style={[commonStyle.SEMIBOLD_20, {color: colors.white}]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={[commonStyle.SEMIBOLD_20, {color: colors.white}]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      ) : (
        <View style={{marginTop: ph(15)}}>
          <FlatList
            data={buttonData}
            keyExtractor={(item, index) => `${item}-${index}`}
            horizontal
            contentContainerStyle={styles.list}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            ListHeaderComponent={<View style={styles.listPadding} />}
            ListFooterComponent={<View style={styles.listPadding} />}
            renderItem={({item}) =>
              selectedBtn == item.type ? (
                <LinearGradient
                  colors={['#0A2F1E', '#118368', '#0A2F1E']}
                  style={{borderRadius: ph(48)}}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handlePress(item.type)}>
                    <Text
                      style={[commonStyle.SEMIBOLD_16, {color: colors.white}]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handlePress(item.type)}>
                  <Text
                    style={[
                      commonStyle.SEMIBOLD_16,
                      {color: colors.defaultText},
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }
          />
          <FlatList
            data={[1]}
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardWidth}
            decelerationRate="fast"
            style={{marginBottom: ph(120)}}
            scrollEventThrottle={16}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            ListHeaderComponent={<View style={styles.listPadding} />}
            ListFooterComponent={<View style={styles.listPadding} />}
            renderItem={({item}) => (
              <PropertyCard
                onPress={() => navigate(routeNames.PropertyDetails)}
              />
            )}
          />
        </View>
      )}
    </SafeAreaWrapper>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,
    backgroundColor: colors.white,
    // paddingBottom:ph(80)
  },
  modalStyle: {
    marginHorizontal: ph(20),
    borderRadius: wp(30),
  },
  innerModalView: {
    marginHorizontal: ph(17),
    marginVertical: ph(32),
    alignItems: 'center',
  },

  list: {
    // alignItems: 'center',
    // gap: ph(15),
  },
  button: {
    borderWidth: wp(1),
    borderColor: colors.border,
    borderRadius: ph(48),
    paddingVertical: ph(7),
    paddingHorizontal: ph(30),
  },
  itemSeparator: {
    width: wp(12),
    height: wp(12),
  },
  listPadding: {
    width: wp(15),
    height: ph(15),
  },
});
