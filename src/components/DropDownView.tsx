import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ph} from '../utils/ResponsiveScreen';
import commonStyle from '../constants/commonStyle';
import {colors} from '../constants/colors';

export interface IDropDownProps extends React.ComponentProps<typeof View> {
  data?: object;
  isSerach?: boolean;
  title?: string;
  searchPlaceholder?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  leftComponent?: ReactNode;
  renderItem?: () => void;
  onChange?: () => void;
  value?: any;
}

const datas = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropDownView = (props: IDropDownProps) => {
  
  const [isFocus, setIsFocus] = useState(false);
  const {
    data,
    onChange,
    isSerach = false,
    searchPlaceholder,
    style,
    title,
    renderItem,
    placeholder,
    leftComponent,
    value,
    containerStyle,
  } = props;
  return (
    <View style={[{flex: 1}, {...(containerStyle as ViewStyle)}]}>
      {title ? (
        <Text style={[commonStyle.MEDIUM_16, {color: colors.black}]}>
          {title}
        </Text>
      ) : null}
      <Dropdown
        data={datas}
        labelField="label"
        valueField="value"
        search={isSerach}
        style={style}
        searchPlaceholder={searchPlaceholder}
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          console.log("Dropdown item: -",item)
          onChange(item);
          // setValue(item.value);
          setIsFocus(false);
        }}
        placeholderStyle={[commonStyle.REGULAR_16, {color: colors.defaultText}]}
        renderItem={item => {
          return (
            <View style={styles.item}>
              {leftComponent && leftComponent}
              <Text style={styles.textItem}>{item.label}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DropDownView;

const styles = StyleSheet.create({
  item: {
    // borderWidth:1,
    gap: ph(10),
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
