import {View, Text, StyleSheet, Keyboard} from 'react-native';
import React, {useState} from 'react';
import DropDownView from '../components/DropDownView';
import {fontPixel, ph, wp} from '../utils/ResponsiveScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HeaderView from '../components/HeaderView';
import {goBack} from '../navigation/RootNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {Formik} from 'formik';
import InputText from '../components/TextInputView';
import {SCREEN_WIDTH} from '../constants/constantKey';
import commonStyle from '../constants/commonStyle';
import {fonts, fontSize} from '../constants/fonts';
import FilePickerButton from '../components/FilePickerButton';

const PropertyListingForm = () => {
  const [formType, setFormType] = useState('Sell');
  const initialValues = {
    txtLocation: '',
    dropAgent: null,
    txtAvailableFrom: '',
    dropPropertyType: null,
    dropTypeOfLet: null,
    dropBathroom: null,
    dropLivingRoom: null,
    dropBedroom: null,
    txtPerAnnum: '',
    txtCalenderMonth: '',
    txtPropertyDetails: '',
  };
  return (
    <SafeAreaWrapper>
      <HeaderView
        isBack={true}
        onBackPress={() => goBack()}
        title={true}
        titleText="Property Listing"
      />
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.white,
        }}>
        <View style={styles.typeFormView}>
          <CustomButton
            onPress={() => setFormType('Sell')}
            isLinear={formType == 'Sell' ? true : false}
            linearStyle={{
              paddingVertical: ph(8),
              paddingHorizontal: ph(20),
            }}
            style={{
              backgroundColor: colors.white,
              borderWidth: 1,
              paddingVertical: ph(8),
              paddingHorizontal: ph(20),
            }}
            title="Sell"
            textStyle={{
              color: formType == 'Sell' ? colors.white : colors.black,
            }}
          />
          <CustomButton
            onPress={() => setFormType('Rent')}
            isLinear={formType == 'Rent' ? true : false}
            linearStyle={{
              paddingVertical: ph(8),
              paddingHorizontal: ph(20),
            }}
            style={{
              backgroundColor: colors.white,
              borderWidth: 1,
              paddingVertical: ph(8),
              paddingHorizontal: ph(20),
            }}
            title="Rent"
            textStyle={{
              color: formType == 'Rent' ? colors.white : colors.black,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            marginTop: ph(20),
            paddingHorizontal: ph(18),
          }}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={values => {
              console.log('form values : ', values);
              Keyboard.dismiss();
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <InputText
                  title="Location"
                  placeholder="Location"
                  // leftComponent={<Icon name="email-outline" size={20} />}
                  style={{marginTop: ph(10)}}
                  containerStyle={{
                    paddingHorizontal: ph(28),
                    borderColor: colors.border,
                  }}
                  value={values.txtLocation}
                  maxLength={50}
                  onChangeText={handleChange('txtLocation')}
                  onBlur={handleBlur('txtLocation')}
                  errorText={
                    errors.txtLocation &&
                    touched.txtLocation &&
                    errors.txtLocation
                  }
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(20),
                  }}>
                  <DropDownView
                    title="Agent"
                    containerStyle={{marginTop: ph(15)}}
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
                    placeholder="Choose"
                  />
                  <InputText
                    title="Available From"
                    placeholder="00/00/0000"
                    titleStyle={{
                      fontFamily: fonts.MEDIUM,
                      fontSize: fontSize.FS_16,
                      color: colors.black,
                    }}
                    style={{marginTop: ph(15), flex: 1}}
                    containerStyle={{
                      padding: ph(20),
                      borderColor: colors.border,
                    }}
                    value={values.txtAvailableFrom}
                    maxLength={50}
                    onChangeText={handleChange('txtAvailableFrom')}
                    onBlur={handleBlur('txtAvailableFrom')}
                    errorText={
                      errors.txtAvailableFrom &&
                      touched.txtAvailableFrom &&
                      errors.txtAvailableFrom
                    }
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(20),
                  }}>
                  <DropDownView
                    title="Property Type"
                    containerStyle={{marginTop: ph(15)}}
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
                    placeholder="Choose"
                  />
                  <DropDownView
                    title="Bathroom"
                    containerStyle={{marginTop: ph(15)}}
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
                    placeholder="Choose"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(20),
                  }}>
                  <DropDownView
                    title="Living room"
                    containerStyle={{marginTop: ph(15)}}
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
                    placeholder="Choose"
                  />
                  <DropDownView
                    title="Bedroom"
                    containerStyle={{marginTop: ph(15)}}
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
                    placeholder="Choose"
                  />
                </View>
                <InputText
                  title="Property Details"
                  placeholder="Enter your Property details"
                  titleStyle={{
                    fontFamily: fonts.MEDIUM,
                    fontSize: fontSize.FS_16,
                    color: colors.black,
                  }}
                  style={{
                    marginTop: ph(15),
                    
                    // height: 150,
                    // textAlignVertical: 'top',
                  }}
                  textStyle={{
                    height: 150,
                    textAlignVertical: 'top',
                  }}
                  containerStyle={{borderColor: colors.border,borderRadius:ph(20)}}
                  value={values.txtPropertyDetails}
                  maxLength={50}
                  numberOfLines={5}
                  onChangeText={handleChange('txtPropertyDetails')}
                  onBlur={handleBlur('txtPropertyDetails')}
                  errorText={
                    errors.txtLocation &&
                    touched.txtLocation &&
                    errors.txtLocation
                  }
                />
                <View style={{marginTop:ph(15)}}>
                  <Text style={[commonStyle.MEDIUM_16,{color:colors.black}]}>Upload pic</Text>
                  <FilePickerButton />
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
};

export default PropertyListingForm;

const styles = StyleSheet.create({
  typeFormView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ph(10),
    marginHorizontal: ph(20),
    gap: ph(15),
  },
});
