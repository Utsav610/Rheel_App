import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../constants/colors';
import {fonts, fontSize} from '../../constants/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ph, wp} from '../../utils/ResponsiveScreen';
import InputText from '../../components/TextInputView';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const [check, setCheck] = useState(0);
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
            alignContent:'center',
            backgroundColor: colors.white,
            marginTop: ph(28),
            paddingHorizontal: ph(18),
          }}>
          <Text
            style={{
              fontFamily: fonts.REGULAR,
              fontSize: fontSize.FS_20,
              textAlign: 'center',
            }}>
            Enter Your Login Information
          </Text>
          <InputText
            placeholder="Enter Your Email"
            leftComponent={<Icon name="email-outline" size={20} />}
            style={{marginTop: ph(20)}}
          />
          <InputText
            placeholder="Password"
            leftComponent={<Icon name="lock-outline" size={20} />}
            style={{marginTop: ph(10)}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: ph(8),
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center', gap: ph(2)}}
              onPress={() => setCheck(!check)}>
              <Icon
                name={check ? 'check-circle' : 'circle-outline'}
                color={check ? 'green' : 'black'}
                size={20}
              />
              <Text
                style={{fontFamily: fonts.REGULAR, fontSize: fontSize.FS_16}}>
                Remember Me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{fontFamily: fonts.REGULAR, fontSize: fontSize.FS_16}}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton title="LOGIN" style={{marginTop: ph(28)}} />
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
