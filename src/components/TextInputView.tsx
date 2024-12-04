import {ReactNode, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {ph, wp} from '../utils/ResponsiveScreen';
import {colors} from '../constants/colors';
import {fonts, fontSize} from '../constants/fonts';

export interface IInputTextProps
  extends React.ComponentProps<typeof TextInput> {
  editable?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftPrefix?: string;
  rightPrefix?: string;
  title?: string;
  subTitle?: string;
  value: string;
  placeholder?: string;
  errorText?: string;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
}

const InputText = (props: IInputTextProps) => {
  const {
    editable = true,
    style,
    containerStyle,
    textStyle,
    value,
    title,
    subTitle,
    leftPrefix,
    rightPrefix,
    placeholder,
    errorText,
    rightComponent,
    leftComponent,
    onChangeText,
    onPress,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  // console.log('🚀 ~ InputText ~ isFocused:', isFocused);

  const onInputFocus = (event: any) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
    // props?.onFocusEffect && props?.onFocusEffect();
  };

  const onInputBlur = (event: any) => {
    // console.log('Inside on blur');
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
    // props?.onBlurEffect && props?.onBlurEffect();
  };

  return (
    <View style={[{...(style as ViewStyle)}]}>
      {title ? (
        <Text style={[styles.smallTitle, {flex: 1, marginBottom: ph(5)}]}>
          {title}{' '}
          <Text style={[styles.descriptionText, {fontSize: fontSize.FS_14}]}>
            {subTitle}
          </Text>
        </Text>
      ) : null}
      <View
        style={[
          styles.container,
          {borderColor: isFocused ? 'green' : 'black'},
          {
            backgroundColor: editable ? colors.white : colors.disable,
          },
          {...(containerStyle as ViewStyle)},
        ]}>
        {leftComponent && leftComponent}
        {leftPrefix && (
          <Text style={[styles.inputText, {marginRight: ph(4)}]}>
            {leftPrefix}
          </Text>
        )}
        <TextInput
          editable={editable}
          selectionColor={colors.black}
          style={[
            styles.inputText,
            {paddingVertical: 0, flex: 1},
            leftComponent ? {marginHorizontal: ph(6)} : null,
            !editable ? {color: colors.disableText} : null,
            textStyle as TextStyle,
          ]}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          {...rest}
        />

        {rightPrefix && (
          <Text style={[styles.inputText, {marginRight: ph(4)}]}>
            {rightPrefix}
          </Text>
        )}
        {rightComponent && rightComponent}
      </View>
      {errorText ? (
        <Text style={[styles.errorText, {flex: 1, marginTop: ph(2)}]}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp(1),
    borderColor: colors.border,
    borderRadius: wp(58),
    padding: ph(15),
    paddingHorizontal: ph(20),
  },
  smallTitle: {
    fontFamily: fonts.MEDIUM,
    fontSize: fontSize.FS_18,
    color: colors.black,
  },
  descriptionText: {
    fontFamily: fonts.REGULAR,
    fontSize: fontSize.FS_18,
    color: colors.black,
  },
  inputText: {
    fontFamily: fonts.REGULAR,
    fontSize: fontSize.FS_16,
    color: colors.text,
  },
  errorText: {
    fontFamily: fonts.REGULAR,
    fontSize: fontSize.FS_12,
    color: colors.error,
  },
});

export default InputText;
