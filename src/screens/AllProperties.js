import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {images} from '../constants/images';
import {colors} from '../constants/colors';
import {ph, wp} from '../utils/ResponsiveScreen';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HeaderView from '../components/HeaderView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {goBack} from '../navigation/RootNavigation';
import commonStyle from '../constants/commonStyle';
import LinearGradient from 'react-native-linear-gradient';

const AllProperties = () => {
  const data = [{label: 'All', label: 'For Sell', label: 'To Rent'}];
  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        titleImg={true}
        isBack={true}
        onBackPress={() => goBack()}
      />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.tabbarContainer}>
          {data.map(({label}, index) => (
            
            <LinearGradient
              key={index}
              colors={[colors.transparent, colors.transparent]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <TouchableOpacity style={styles.tabbarButton}>
                <Text style={commonStyle.titleText}>{label}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>
        
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default AllProperties;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: ph(10),
  },
  tabbarContainer: {
    flexDirection: 'row',
    gap: ph(10),
    marginHorizontal: ph(20),
  },
  tabbarButton: {
    alignItems: 'center',
    paddingHorizontal: ph(31),
    paddingVertical: ph(7),
    borderRadius: ph(58),
    borderWidth: wp(1),
    borderColor: colors.border,
  },
});
