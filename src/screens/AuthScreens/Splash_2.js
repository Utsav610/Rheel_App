import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import {colors} from '../../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {fonts, fontSize} from '../../constants/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ph, wp} from '../../utils/ResponsiveScreen';
import {images} from '../../constants/images';
import CustomButton, {ButtonType} from '../../components/CustomButton';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/constantKey';
import { navigate } from '../../navigation/RootNavigation';
import routeNames from '../../constants/routeNames';

const Splash_2 = () => {
  const dimension = Dimensions.get('window');
  return (
    <SafeAreaWrapper>
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
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: fonts.MEDIUM, fontSize: fontSize.FS_24}}>
            DESIGND FOR NIGERIAN'S
          </Text>
          <Text style={{fontFamily: fonts.BOLD, fontSize: fontSize.FS_24}}>
            HOME AND ABORAD
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: ph(35),
              gap: ph(10),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Icon name="home-account" size={16} color="green" />
              <Text
                style={{
                  fontFamily: fonts.SEMIBOLD,
                  fontSize: fontSize.FS_12,
                }}>
                Search with confidence
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Icon name="heart" size={16} color="red" />
              <Text
                style={{
                  fontFamily: fonts.SEMIBOLD,
                  fontSize: fontSize.FS_12,
                }}>
                Save your favorites
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: ph(8),
              gap: ph(10),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Icon name="bag-personal" size={16} color={colors.orange} />
              <Text
                style={{
                  fontFamily: fonts.SEMIBOLD,
                  fontSize: fontSize.FS_12,
                }}>
                Save on fees
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Icon name="earth" size={16} color="green" />
              <Text
                style={{
                  fontFamily: fonts.SEMIBOLD,
                  fontSize: fontSize.FS_12,
                }}>
                Available worldwide
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={images.background}
            style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 2}}
          />
        </View>
        <CustomButton
          title="Next"
          style={{bottom: 20,position:'absolute',width:SCREEN_WIDTH - 20,alignSelf:'center'}}
          type={ButtonType.border}
          textStyle={{color:colors.black}}
          onPress={() => navigate(routeNames.Login)}
        />
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
};

export default Splash_2;
