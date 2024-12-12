import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../constants/colors';
import {ph, wp} from '../utils/ResponsiveScreen';
import {Formik} from 'formik';
import commonStyle from '../constants/commonStyle';
import CustomButton from '../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import FilterNumberList from '../components/FilterNumberList';
import DropDownView from '../components/DropDownView';
import {fonts, fontSize} from '../constants/fonts';
import InputText from '../components/TextInputView';

export default function FliterRent() {
  const buttonData = [
    {type: 'any', title: 'Any'},
    {type: '1', title: '1+'},
    {type: '2', title: '2+'},
    {type: '3', title: '3+'},
    {type: '4', title: '4+'},
    {type: '5', title: '5+'},
    {type: '6', title: '6+'},
  ];

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          marginTop: ph(20),
          //   paddingHorizontal: ph(18),
        }}>
        <Formik
          initialValues={{
            bedroom: {type: 'any', title: 'Any'},
            bathroom: {type: 'any', title: 'Any'},
            amenities: null,
            floorMiniArea: '',
            floorMaxArea: '',
            propertyMiniAge: null,
            propertyMaxAge: null,
            rentType: 'Any',
          }}
          onSubmit={values => {
            console.log('form values : ', values);
            Keyboard.dismiss();
          }}
          onReset={values => {
            (values.bedroom = {type: 'any', title: 'Any'}),
              (values.bathroom = {type: 'any', title: 'Any'}),
              (values.amenities = null),
              (values.floorMiniArea = ''),
              (values.floorMaxArea = ''),
              (values.propertyMiniAge = null),
              (values.propertyMaxAge = null),
              (values.rentType = 'Any');
          }}
          enableReinitialize={true}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            resetForm,
            values,
            errors,
            touched,
          }) => (
            <View>
              <FilterNumberList
                data={buttonData}
                title={'Bedroom'}
                onPress={item => {
                  setFieldValue('bedroom', item);
                }}
                value={values.bedroom}
              />

              <FilterNumberList
                data={buttonData}
                title={'Bathroom'}
                containerStyle={{marginTop: ph(20)}}
                onPress={item => {
                  setFieldValue('bathroom', item);
                }}
                value={values.bathroom}
              />

              <DropDownView
                title="Amenities"
                containerStyle={{margin: ph(20)}}
                style={{
                  flex: 1,
                  marginTop: ph(18),
                  borderColor: colors.border,
                  borderWidth: wp(1),
                  borderRadius: ph(63),
                  paddingHorizontal: ph(17),
                  paddingVertical: ph(20),
                  alignItems: 'center',
                }}
                value={values.amenities}
                placeholder="Choose amenities"
                onChange={item => {
                  setFieldValue('amenities', item);
                }}
              />
              <Text
                style={[
                  commonStyle.MEDIUM_16,
                  {color: colors.black, marginHorizontal: ph(20)},
                ]}>
                Floor Area
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: ph(20),
                  marginHorizontal: ph(20),
                }}>
                <InputText
                  //   title="Available From"
                  placeholder="Minimum Area"
                  titleStyle={{
                    fontFamily: fonts.MEDIUM,
                    fontSize: fontSize.FS_16,
                    color: colors.black,
                  }}
                  style={{marginTop: ph(15), flex: 1}}
                  containerStyle={{
                    borderColor: colors.border,
                    paddingHorizontal: ph(10),
                    paddingVertical: ph(20),
                  }}
                  value={values.floorMiniArea}
                  maxLength={50}
                  onChangeText={handleChange('floorMiniArea')}
                  onBlur={handleBlur('floorMiniArea')}
                  errorText={
                    errors.floorMiniArea &&
                    touched.floorMiniArea &&
                    errors.floorMiniArea
                  }
                />
                <InputText
                  //   title="Available From"
                  placeholder="Maximum Area"
                  titleStyle={{
                    fontFamily: fonts.MEDIUM,
                    fontSize: fontSize.FS_16,
                    color: colors.black,
                  }}
                  style={{marginTop: ph(15), flex: 1}}
                  containerStyle={{
                    paddingHorizontal: ph(10),
                    paddingVertical: ph(20),
                    borderColor: colors.border,
                  }}
                  value={values.floorMaxArea}
                  maxLength={50}
                  onChangeText={handleChange('floorMaxArea')}
                  onBlur={handleBlur('floorMaxArea')}
                  errorText={
                    errors.floorMaxArea &&
                    touched.floorMaxArea &&
                    errors.floorMaxArea
                  }
                />
              </View>

              <Text
                style={[
                  commonStyle.MEDIUM_16,
                  {
                    color: colors.black,
                    marginHorizontal: ph(20),
                    marginTop: ph(20),
                    marginBottom: ph(17),
                  },
                ]}>
                Property Age
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: ph(20),
                  marginHorizontal: ph(20),
                  //   backgroundColor:'red'
                }}>
                <DropDownView
                  //   title="Property Type"
                  containerStyle={{}}
                  style={{
                    flex: 1,
                    marginTop: ph(5),
                    borderColor: colors.border,
                    borderWidth: wp(1),
                    borderRadius: ph(63),
                    paddingHorizontal: ph(17),
                    paddingVertical: ph(20),
                    // alignItems: 'center',
                  }}
                  placeholder="No Min"
                  onChange={item => setFieldValue('propertyMiniAge', item)}
                  value={values.propertyMiniAge}
                />
                <DropDownView
                  //   title=""
                  containerStyle={{marginVertical: ph(0)}}
                  style={{
                    flex: 1,
                    marginTop: ph(5),
                    borderColor: colors.border,
                    borderWidth: wp(1),
                    borderRadius: ph(63),
                    paddingHorizontal: ph(17),
                    paddingVertical: ph(20),
                    alignItems: 'center',
                  }}
                  placeholder="No Max"
                  onChange={item => setFieldValue('propertyMaxAge', item)}
                  value={values.propertyMaxAge}
                />
              </View>
              <FlatList
                data={[
                  {title: 'Any'},
                  {title: 'Long Let'},
                  {title: 'Short Let'},
                  {title: 'Lease'},
                ]}
                keyExtractor={(item, index) => `${item}-${index}`}
                horizontal
                style={[{marginTop: ph(18)}]}
                contentContainerStyle={styles.list}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
                ListHeaderComponent={<View style={styles.listPadding} />}
                ListFooterComponent={<View style={styles.listPadding} />}
                renderItem={({item}) =>
                  values.rentType == item.title ? (
                    <LinearGradient
                      colors={['#0A2F1E', '#118368', '#0A2F1E']}
                      style={[{borderRadius: ph(30)}]}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}>
                      <TouchableOpacity
                        style={[styles.button]}
                        onPress={() => {
                          setFieldValue('rentType', item.title)
                        }}>
                        <Text
                          style={[
                            commonStyle.SEMIBOLD_16,
                            {color: colors.white, textAlign: 'center'},
                          ]}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  ) : (
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        setFieldValue('rentType', item.title);
                      }}>
                      <Text
                        style={[
                          commonStyle.SEMIBOLD_16,
                          {color: colors.defaultText, textAlign: 'center'},
                        ]}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )
                }
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
                  title="Reset"
                  textStyle={{color: colors.defaultText}}
                  onPress={() => resetForm()}
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
                  //   leftComponent={<PropertyDetailWhathappIcon />}
                  title="Apply"
                  textStyle={{color: colors.white}}
                  onPress={() => handleSubmit()}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: wp(1),
    borderColor: colors.border,
    borderRadius: ph(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ph(10),
    paddingHorizontal: ph(20),
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
