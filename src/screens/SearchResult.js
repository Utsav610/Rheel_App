import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HeaderView from '../components/HeaderView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routeNames from '../constants/routeNames';
import {images} from '../constants/images';
import {colors} from '../constants/colors';
import {ph, wp} from '../utils/ResponsiveScreen';
import {goBack, navigate} from '../navigation/RootNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputText from '../components/TextInputView';
import {useDispatch, useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';
import commonStyle from '../constants/commonStyle';
import {storeSearchCity} from '../redux/reducers/userReducer';
import CustomButton from '../components/CustomButton';

export default function SearchResult() {
  const cityData = useSelector(state => state.userRedux.city_data);
  const dispatch = useDispatch();
  console.log('City Data', cityData);
  const [value, setValue] = useState(cityData.value);
  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        titleText="Search"
        isBack={true}
        onBackPress={() => goBack()}
      />
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.mainContainer}>
          <Dropdown
            style={styles.searchContainer}
            data={[
              {label: 'Rajkot', value: '1'},
              {label: 'Ahmedabad', value: '2'},
              {label: 'Surat', value: '3'},
            ]}
            labelField="label"
            valueField="value"
            placeholder="Select by Location"
            value={value}
            placeholderStyle={[
              commonStyle.REGULAR_16,
              {color: colors.defaultText},
            ]}
            containerStyle={{borderRadius: ph(30), padding: ph(15)}}
            onChange={item => {
              console.log(item);
              setValue(item.value);
              dispatch(storeSearchCity(item));
              navigate(routeNames.SearchResult);
            }}
            renderLeftIcon={() => (
              <Icon name="magnify" size={25} style={{marginRight: ph(10)}} />
            )}
            renderRightIcon={() => <View></View>}
            renderItem={item => {
              return (
                <View style={styles.item}>
                  <Text
                    style={[
                      commonStyle.REGULAR_16,
                      {color: colors.defaultText},
                    ]}>
                    {item.label}
                  </Text>
                </View>
              );
            }}
          />
          <TouchableOpacity
            style={{
              padding: ph(5),
              marginHorizontal:ph(20),
              borderWidth: wp(1),
              borderColor: colors.border,
              borderRadius: ph(20),
            }} onPress={() => navigate(routeNames.Filter)}>
            <Text>Filter</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: ph(10),
    marginBottom: ph(120),
  },
  profileButton: {
    borderRadius: wp(50),
    borderWidth: 1,
  },
  profileImage: {
    width: wp(60),
    height: wp(60),
  },
  addButton: {
    backgroundColor: colors.backgroundContainer,
    borderRadius: wp(50),
    borderColor: colors.border,
    borderWidth: 1,
    padding: ph(13),
  },
  searchContainer: {
    paddingHorizontal: ph(20),
    borderWidth: wp(1),
    borderColor: colors.border,
    marginHorizontal: ph(18),
    paddingVertical: ph(13),
    borderRadius: ph(50),
  },
  item: {
    gap: ph(10),
    padding: ph(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
