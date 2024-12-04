import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {ReactNode} from 'react';
import {ph, wp} from '../utils/ResponsiveScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';
import {images} from '../constants/images';

export interface IHeaderProps extends React.ComponentProps<typeof View> {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  tintColor?: string;
  isHome?: boolean;
  isBack?: boolean;
  titleText?: string;
  titleImg?: boolean;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
  onBackPress?: () => void;
}

const HeaderView = (props: IHeaderProps) => {
  const {
    style,
    textStyle,
    title = false,
    tintColor = colors.black,
    isHome = false,
    isBack = false,
    leftComponent,
    rightComponent,
    titleText,
    titleImg,
    onBackPress,
    ...rest
  } = props;

  return (
    <View
      style={[
        styles.container,
        isBack
          ? {paddingLeft: ph(5), paddingRight: ph(15)}
          : {paddingHorizontal: ph(15)},
      ]}>
      {isBack && (
        <TouchableOpacity
          onPress={onBackPress}
          style={{
            backgroundColor: '#F8FFFC',
            borderRadius: wp(50),
            borderColor: '#D9D9D9',
            borderWidth: 1,
            padding:ph(13)
          }}>
          <Icon name={'chevron-left'} size={wp(30)} color={'black'} />
        </TouchableOpacity>
      )}
      {leftComponent && leftComponent}

      {/* {title ? (
          <Text
            numberOfLines={1}
            style={[
              styles.textTitle,
              {
                color: tintColor,
                marginHorizontal: !isBack ? ph(20) : ph(0),
                fontSize: fontSize.FS_20,
              },
  
              {paddingHorizontal: isBack ? ph(8) : ph(3), flex: 1},
              {...(textStyle as TextStyle)},
            ]}>
            {title}
          </Text>
        )} */}
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {title ? (
          titleText ? (
            <Text
              style={{
                textAlign: 'center',
                fontFamily: fonts.SEMIBOLD,
                fontSize: fontSize.FS_20,
              }}>
              {titleText}
            </Text>
          ) : titleImg ? (
            <Image
              source={images.logo}
              style={{width: wp(155), height: wp(60), alignSelf: 'center'}}
            />
          ) : null
        ) : null}
      </View>
      {rightComponent && rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ph(15),
    marginHorizontal: ph(15),
    paddingVertical: ph(10),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    // justifyContent: 'space-around'
  },
  textTitle: {
    fontFamily: fonts.SEMIBOLD,
    // color: Colors.white,
  },
});

export default HeaderView;
