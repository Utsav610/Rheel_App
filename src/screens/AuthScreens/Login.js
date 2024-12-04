import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../constants/colors';
import {fonts, fontSize} from '../../constants/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ph, wp} from '../../utils/ResponsiveScreen';
import InputText from '../../components/TextInputView';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { navigate } from '../../navigation/RootNavigation';
import routeNames from '../../constants/routeNames';

const Login = () => {
  const [check, setCheck] = useState(0);

  const validationSchema = Yup.object().shape({
    txtEmail: Yup.string()
      .email('Invalid email address')
      .matches(
        /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/,
        'Invalid email address (only lowercase letters allowed)',
      )
      .required('* Please enter a valid email address'),
    // .nullable(true),
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
  });

  const btnLogin = values => {
    console.log('values :- ', values);
    
  };

  return (
    <SafeAreaWrapper>
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.white,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: ph(28),
            paddingHorizontal: ph(18),
          }}>
          <Text style={{fontFamily: fonts.BOLD, fontSize: fontSize.FS_18}}>
            Continue as guest
          </Text>
          <Icon name="arrow-right" size={25} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
            marginTop: ph(28),
            paddingHorizontal: ph(18),
          }}>
          <Text
            style={{
              fontFamily: fonts.MEDIUM,
              fontSize: fontSize.FS_20,
              textAlign: 'center',
            }}>
            Enter Your Login Information
          </Text>
          <Formik
            initialValues={{
              txtEmail: '',
              txtPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log('login values : ', values);
              Keyboard.dismiss();
              btnLogin(values);
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
                  placeholder="Enter Your Email"
                  leftComponent={<Icon name="email-outline" size={20} />}
                  style={{marginTop: ph(20)}}
                  value={values.txtEmail}
                  maxLength={50}
                  onChangeText={handleChange('txtEmail')}
                  onBlur={handleBlur('txtEmail')}
                  errorText={errors.txtEmail && touched.txtEmail && errors.txtEmail}
                />
                <InputText
                  placeholder="Password"
                  leftComponent={<Icon name="lock-outline" size={20} />}
                  style={{marginTop: ph(10)}}
                  value={values.txtPassword}
                  onChangeText={handleChange('txtPassword')}
                  onBlur={handleBlur('txtPassword')}
                  errorText={errors.txtPassword && touched.txtPassword && errors.txtPassword}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: ph(8),
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: ph(2),
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
                      Remember Me
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigate('HeaderView')}>
                    <Text
                      style={{
                        fontFamily: fonts.REGULAR,
                        fontSize: fontSize.FS_16,
                      }}>
                      Forget Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <CustomButton
                  title="LOGIN"
                  isLinear={true}
                  style={{marginTop: ph(28)}}
                  onPress={() => handleSubmit()}
                />
                <View style={{flexDirection:'row',alignItems:'center',gap:ph(5),justifyContent:'center',marginTop:ph(20)}}>
                <Text style={{fontFamily:fonts.REGULAR,fontSize:fontSize.FS_18}}>Don’t have an account?</Text>
                <TouchableOpacity onPress={() => navigate(routeNames.SignUp)}>
                  <Text style={{fontFamily:fonts.BOLD,fontSize:fontSize.FS_18}}>Sign up </Text>
                </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>

          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: ph(30)
            }}>
            <View
              style={{
                flex: 1,
                height: wp(1),
                backgroundColor: colors.black,
                marginHorizontal: ph(10),
              }}
            />
            <Text
              style={{
                fontFamily: fonts.SEMIBOLD,
                fontSize: fontSize.FS_16,
              }}>
              Or
            </Text>
            <View
              style={{
                flex: 1,
                height: wp(1),
                backgroundColor: colors.black,
                marginHorizontal: ph(10),
              }}
            />
          </View>
          <CustomButton title="Continue with Apple" style={{marginTop: ph(28),backgroundColor:colors.black}} textStyle={{fontFamily:fonts.MEDIUM,fontSize:fontSize.FS_16}} /> */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
};

export default Login;
