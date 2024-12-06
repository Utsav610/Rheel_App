import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';
import {ph, wp} from '../utils/ResponsiveScreen';
import LinearGradient from 'react-native-linear-gradient';

export enum ButtonType {
  border,
  fill,
}

export interface IButtonProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  linearStyle?: StyleProp<ViewStyle>;
  linearbtnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  children?: ReactNode;
  isLinear?: boolean;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
  onPress?: () => void;
  type?: ButtonType;
}

const CustomButton = (props: IButtonProps) => {
  const {
    disabled,
    style,
    linearStyle,
    linearbtnStyle,
    textStyle,
    title,
    children,
    rightComponent,
    leftComponent,
    isLinear = false,
    onPress,
    type,
    ...rest
  } = props;

  const buttonStyle = [
    type == ButtonType.border ? styles.btnBorderStyle : styles.btnStyle,
    disabled && {backgroundColor: colors.disable},
    {...(style as ViewStyle)},
  ];

  const btngradiantStyle = [styles.btnLGStyle, {...(linearStyle as ViewStyle)}];

  return (
    <>
      {isLinear ? (
        <LinearGradient
          colors={['#0A2F1E', '#118368', '#0A2F1E']}
          style={btngradiantStyle}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity
            disabled={disabled}
            style={linearbtnStyle}
            onPress={onPress}
            hitSlop={{top: ph(10), left: ph(10), right: ph(10), bottom: ph(10)}}
            {...rest}>
            {leftComponent && leftComponent}
            <Text style={[styles.btnText, textStyle]}>{title}</Text>
            {rightComponent && rightComponent}
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <TouchableOpacity
          disabled={disabled}
          style={buttonStyle}
          onPress={onPress}
          hitSlop={{top: ph(10), left: ph(10), right: ph(10), bottom: ph(10)}}
          {...rest}>
          {leftComponent && leftComponent}
          <Text style={[styles.btnText, textStyle]}>{title}</Text>
          {rightComponent && rightComponent}
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'green',
    padding: ph(16),
    borderRadius: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLGStyle: {
    padding: ph(16),
    borderRadius: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBorderStyle: {
    backgroundColor: colors.white,
    padding: ph(16),
    borderRadius: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    fontSize: fontSize.FS_18,
    fontFamily: fonts.SEMIBOLD,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
});
