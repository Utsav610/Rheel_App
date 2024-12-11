import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ph, wp} from '../utils/ResponsiveScreen';
import {colors} from '../constants/colors';
import commonStyle from '../constants/commonStyle';

const FilePickerButton = props => {
  const {ContainerStyle,titleContainer, title,descriptionContainer, description,onPress} = props;
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        },
        {...ContainerStyle},
      ]} onPress={onPress} activeOpacity={0.5}>
      <View
        style={[{
          flex: 0.5,
          borderWidth: wp(1),
          paddingVertical: ph(18),
          paddingLeft: ph(16),
          paddingRight: ph(8),
          borderTopLeftRadius: ph(50),
          borderBottomLeftRadius: ph(50),
          backgroundColor: colors.backgroundContainer,
          borderColor: colors.border,
        },{...titleContainer}]}>
        <Text style={[commonStyle.REGULAR_16, {color: colors.black}]}>
          {title}
        </Text>
      </View>
      <View
        style={[{
          flex: 1,
          borderWidth: wp(1),
          paddingVertical: ph(18),
          paddingLeft: ph(18),
          paddingLeft: ph(18),
          borderTopRightRadius: ph(50),
          borderBottomRightRadius: ph(50),
          borderColor: colors.border,
        },{...descriptionContainer}]}>
        <Text style={[commonStyle.REGULAR_16, {color: colors.defaultText}]}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilePickerButton;
