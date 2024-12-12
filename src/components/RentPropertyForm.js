import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DropDownView from '../components/DropDownView';
import {fontPixel, ph, wp} from '../utils/ResponsiveScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {Formik} from 'formik';
import InputText from '../components/TextInputView';
import {SCREEN_WIDTH} from '../constants/constantKey';
import commonStyle from '../constants/commonStyle';
import {fonts, fontSize} from '../constants/fonts';
import FilePickerButton from '../components/FilePickerButton';
import ImagePicker from 'react-native-image-crop-picker';
import {images} from '../constants/images';

const RentPropertyForm = () => {
  const [data, setData] = useState({
    pic: [],
    floor: [],
    video: [],
  });
  console.log('🚀 ~ PropertyListingForm ~ data:', data);

  const ChooseImage = type => {
    Alert.alert('choose_option', 'upload Picture', [
      {
        text: 'camera',
        onPress: () => {
          // setIsLoading(true);
          ImagePicker.openCamera({
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH,
            cropping: true,
            multiple: false,
            mediaType: 'photo',
            includeBase64: false,
            multipleShot: false,
            compressImageQuality: 0.8,
          })
            .then(images => {
              // setIsLoading(false);
              console.log('image: ', images.path);
              addItem(type, images);
            })
            .catch(error => {
              // setIsLoading(false);
              console.log(error);
            });
        },
        style: 'default',
      },
      {
        text: 'gallery',
        onPress: () => {
          // setIsLoading(true);
          ImagePicker.openPicker({
            multiple: true,
            freeStyleCropEnabled: true,
            cropping: true,
            mediaType: 'photo',
            includeBase64: false,
            compressImageQuality: 0.8,
          })
            .then(images => {
              console.log('Selected Image : ' + JSON.stringify(images.path));

              // setIsLoading(false);
              addItem(type, images);
            })
            .catch(error => {
              // setIsLoading(false);

              console.log(error);
            });
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  const ChooseVideo = type => {
    Alert.alert('choose_option', 'upload Picture', [
      {
        text: 'camera',
        onPress: () => {
          // setIsLoading(true);
          ImagePicker.openCamera({
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH,
            cropping: true,
            multiple: false,
            mediaType: 'video',
            includeBase64: false,
            multipleShot: false,
            compressImageQuality: 0.8,
          })
            .then(video => {
              // setIsLoading(false);

              addItem(type, video);
            })
            .catch(error => {
              // setIsLoading(false);
              console.log(error);
            });
        },
        style: 'default',
      },
      {
        text: 'gallery',
        onPress: () => {
          // setIsLoading(true);
          ImagePicker.openPicker({
            mediaType: 'video',
            multiple: true,
          })
            .then(video => {
              console.log('Selected video : ' + JSON.stringify(video));
              addItem(type, video);
            })
            .catch(error => {
              // setIsLoading(false);

              console.log(error);
            });
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  const addItem = (type, item) => {
    console.log('🚀 ~ addItem ~ type:', type);
    setData(prevData => ({
      ...prevData,
      [type]: Array.isArray(item)
        ? [...prevData[type], ...item] // Spread array if item is an array
        : [...prevData[type], item], // Add single item if not an array
    }));
  };

  const removeItem = (type, item) => {
    setData(prevData => ({
      ...prevData,
      [type]: prevData[type].filter(image => image !== item),
    }));
  };

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
            setFieldValue,
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
                  onChange={item => setFieldValue('dropAgent',item)}
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
                  onChange={item => setFieldValue('dropPropertyType',item)}
                />
                <DropDownView
                  title="Type of Let"
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
                  onChange={item => setFieldValue('dropTypeOfLet',item)}
                />
              </View>
              <InputText
                title="Per Annum(PA)"
                placeholder="(N) Per Anunum Price"
                // leftComponent={<Icon name="email-outline" size={20} />}
                style={{marginTop: ph(10)}}
                containerStyle={{
                  paddingHorizontal: ph(28),
                  borderColor: colors.border,
                }}
                value={values.txtPerAnnum}
                maxLength={50}
                onChangeText={handleChange('txtPerAnnum')}
                onBlur={handleBlur('txtPerAnnum')}
                errorText={
                  errors.txtPerAnnum &&
                  touched.txtPerAnnum &&
                  errors.txtPerAnnum
                }
              />
              <InputText
                title="Per Calendar Month (PCM)"
                placeholder="(N) Per Month Price"
                // leftComponent={<Icon name="email-outline" size={20} />}
                style={{marginTop: ph(10)}}
                containerStyle={{
                  paddingHorizontal: ph(28),
                  borderColor: colors.border,
                }}
                value={values.txtCalenderMonth}
                maxLength={50}
                onChangeText={handleChange('txtCalenderMonth')}
                onBlur={handleBlur('txtCalenderMonth')}
                errorText={
                  errors.txtCalenderMonth &&
                  touched.txtCalenderMonth &&
                  errors.txtCalenderMonth
                }
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
                onChange={item => setFieldValue('dropBathroom',item)}
              />

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
                  onChange={item => setFieldValue('dropLivingRoom',item)}
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
                  onChange={item => setFieldValue('dropBedroom',item)}
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
                containerStyle={{
                  borderColor: colors.border,
                  borderRadius: ph(20),
                }}
                value={values.txtPropertyDetails}
                maxLength={50}
                numberOfLines={5}
                onChangeText={handleChange('txtPropertyDetails')}
                onBlur={handleBlur('txtPropertyDetails')}
                errorText={
                  errors.txtPropertyDetails &&
                  touched.txtPropertyDetails &&
                  errors.txtPropertyDetails
                }
              />
              <View style={{marginTop: ph(15)}}>
                <Text
                  style={[
                    commonStyle.MEDIUM_16,
                    {color: colors.black, marginBottom: ph(5)},
                  ]}>
                  Upload pic
                </Text>
                <FilePickerButton
                  title="Choose File"
                  description="no files selected"
                  onPress={() => ChooseImage('pic')}
                />
              </View>
              {data.pic && data.pic.length > 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(10),
                    marginTop: ph(10),
                  }}>
                  {data.pic.map(item => (
                    <View>
                      <Image
                        key={item.id}
                        source={{uri: item.path}}
                        style={styles.image}
                      />
                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          right: ph(-3),
                          top: ph(-5),
                          backgroundColor: colors.white,
                          borderRadius: ph(10),
                        }}
                        onPress={() => removeItem('pic', item)}>
                        <Icon name="close-thick" size={20} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ) : null}

              <View style={{marginTop: ph(15)}}>
                <Text
                  style={[
                    commonStyle.MEDIUM_16,
                    {color: colors.black, marginBottom: ph(5)},
                  ]}>
                  Floor Plan
                </Text>
                <FilePickerButton
                  title="Choose File"
                  description="no files selected"
                  onPress={() => ChooseImage('floor')}
                />
              </View>
              {data.floor && data.floor.length > 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(10),
                    marginTop: ph(10),
                  }}>
                  {data.floor.map(item => (
                    <View>
                      <Image
                        key={item.id}
                        source={{uri: item.path}}
                        style={styles.image}
                      />
                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          right: ph(-3),
                          top: ph(-5),
                          backgroundColor: colors.white,
                          borderRadius: ph(10),
                        }}
                        onPress={() => removeItem('floor', item)}>
                        <Icon name="close-thick" size={20} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ) : null}

              <View style={{marginTop: ph(15)}}>
                <Text
                  style={[
                    commonStyle.MEDIUM_16,
                    {color: colors.black, marginBottom: ph(5)},
                  ]}>
                  Property Video
                </Text>
                <FilePickerButton
                  title="Choose File"
                  description="no files selected"
                  onPress={() => ChooseVideo('video')}
                />
              </View>
              {data.video && data.video.length > 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(10),
                    marginTop: ph(10),
                  }}>
                  {data.video.map(item => (
                    <View>
                      <Image
                        key={item.id}
                        source={images.bannerImg}
                        style={styles.image}
                      />
                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          right: ph(-3),
                          top: ph(-5),
                          backgroundColor: colors.white,
                          borderRadius: ph(10),
                        }}
                        onPress={() => removeItem('video', item)}>
                        <Icon name="close-thick" size={20} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ) : null}

              <CustomButton
                isLinear={true}
                title="Upload"
                linearStyle={{marginVertical: ph(53)}}
              />
            </>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RentPropertyForm;
