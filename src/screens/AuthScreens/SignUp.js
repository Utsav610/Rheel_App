import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../../constants/colors';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderView from '../../components/HeaderView';
import {ph, wp} from '../../utils/ResponsiveScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fonts, fontSize } from '../../constants/fonts';
import InputText from '../../components/TextInputView';
import { navigate } from '../../navigation/RootNavigation';
import routeNames from '../../constants/routeNames';

import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton';
import HomeIcon from '../../assets/images/HomeIcon';

const SignUp = () => {

  const [check, setCheck] = useState(0);

  const validationSchema = Yup.object().shape({
    txtName: Yup.string()
      .required('Name is required')
      .matches(/^[a-zA-Z\s]+$/, 'Name must contain only alphabets and spaces')
      .min(2, 'Name must be at least 2 characters long')
      .max(50, 'Name cannot exceed 50 characters'),
    
    txtEmail: Yup.string()
      .email('Invalid email address')
      .matches(
        /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/,
        'Invalid email address (only lowercase letters allowed)',
      )
      .required('* Please enter a valid email address'),
    
    txtNumber: Yup.string()
      .required('Phone number is required')
      .matches(
        /^[0-9]{10}$/,
        'Phone number must be 10 digits',
      ),
    
    txtPassword: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      ),
    
    txtConfPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('txtPassword'), null], 'Passwords must match'),
  });
  

      const btnSignUp = values => {
        console.log('values :- ', values);
        navigate(routeNames.Login)
      };

  return (
    <SafeAreaWrapper>
        <HeaderView
          isBack={true}
          //    title={true}
          //    titleText="Sign Up"
          // titleImg={true}
          //   rightComponent={
          //     <TouchableOpacity
          //       onPress={() => {}}
          //       style={{
          //         backgroundColor: '#F8FFFC',
          //         borderRadius: wp(50),
          //         borderColor: '#D9D9D9',
          //         borderWidth: 1,
          //         padding: ph(13),
          //       }}>
          //       <Icon name={'plus'} size={wp(30)} color={'black'} />
          //     </TouchableOpacity>
          //   }
        />
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
          <Text
            style={{
              fontFamily: fonts.MEDIUM,
              fontSize: fontSize.FS_20,
            }}>
            Create your account
          </Text>
          <Formik
            initialValues={{
              txtName: '',
              txtEmail: '',
              txtNumber: '',
              txtPassword: '',
              txtConfPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log('login values : ', values);
              Keyboard.dismiss();
              btnSignUp(values);
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
                title='Name'
                  placeholder="ex: jon smith"
                  // leftComponent={<Icon name="email-outline" size={20} />}
                  style={{marginTop: ph(20)}}
                  containerStyle={{paddingHorizontal: ph(28)}}
                  value={values.txtName}
                  maxLength={50}
                  onChangeText={handleChange('txtName')}
                  onBlur={handleBlur('txtName')}
                  errorText={errors.txtName && touched.txtName && errors.txtName}
                />

                <InputText
                title='Email'
                  placeholder="example@gamil.com"
                  // leftComponent={<Icon name="email-outline" size={20} />}
                  style={{marginTop: ph(10)}}
                  value={values.txtEmail}
                  containerStyle={{paddingHorizontal: ph(28)}}
                  maxLength={50}
                  onChangeText={handleChange('txtEmail')}
                  onBlur={handleBlur('txtEmail')}
                  errorText={errors.txtEmail && touched.txtEmail && errors.txtEmail}
                />

                <InputText
                title='Number'
                  placeholder="enter valid phone number"
                  // leftComponent={<Icon name="email-outline" size={20} />}
                  style={{marginTop: ph(10)}}
                  containerStyle={{paddingHorizontal: ph(28)}}
                  value={values.txtNumber}
                  maxLength={10}
                  keyboardType='number-pad'
                  onChangeText={handleChange('txtNumber')}
                  onBlur={handleBlur('txtNumber')}
                  errorText={errors.txtNumber && touched.txtNumber && errors.txtNumber}
                />

                <InputText
                title='Password'
                  placeholder="***************"
                  // leftComponent={<Icon name="email-outline" size={20} />}
                  style={{marginTop: ph(10)}}
                  containerStyle={{paddingHorizontal: ph(28)}}
                  value={values.txtPassword}
                  maxLength={50}
                  onChangeText={handleChange('txtPassword')}
                  onBlur={handleBlur('txtPassword')}
                  errorText={errors.txtPassword && touched.txtPassword && errors.txtPassword}
                />

                <InputText
                title='Confirm Password'
                  placeholder="***************"
                  // leftComponent={<Icon name="email-outline" size={20} />}
                  style={{marginTop: ph(10)}}
                  value={values.txtConfPassword}
                  containerStyle={{paddingHorizontal: ph(28)}}
                  maxLength={50}
                  onChangeText={handleChange('txtConfPassword')}
                  onBlur={handleBlur('txtConfPassword')}
                  errorText={errors.txtConfPassword && touched.txtConfPassword && errors.txtConfPassword}
                />
                <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: ph(10),
                      gap: ph(10),
                    }}
                    onPress={() => setCheck(!check)}>
                    <Icon
                      name={check ? 'check-circle' : 'circle-outline'}
                      color={check ? 'green' : 'black'}
                      size={20}
                    />
                    <Text
                      style={{
                        fontFamily: fonts.REGULAR,
                        fontSize: fontSize.FS_16,
                      }}>
                      I understand the <Text  style={{
                        fontFamily: fonts.REGULAR,
                        fontSize: fontSize.FS_16,
                        color: 'green'
                      }}>terms & policy</Text>
                    </Text>
                  </TouchableOpacity>

                <CustomButton
                  title="SIGN UP"
                  style={{marginTop: ph(25)}}
                  isLinear={true}
                  onPress={() => handleSubmit()}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ph(5),
                    justifyContent: 'center',
                    marginTop: ph(20),
                    marginBottom: ph(20)
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.REGULAR,
                      fontSize: fontSize.FS_18,
                    }}>
                    Have an account?
                  </Text>
                  <HomeIcon />
                  <TouchableOpacity onPress={() => navigate(routeNames.Login)}>
                    <Text
                      style={{
                        fontFamily: fonts.BOLD,
                        fontSize: fontSize.FS_18,
                      }}>
                     Log in
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
};

export default SignUp;
