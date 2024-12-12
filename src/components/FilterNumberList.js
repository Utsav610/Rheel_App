import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ph, wp} from '../utils/ResponsiveScreen';
import {colors} from '../constants/colors';
import commonStyle from '../constants/commonStyle';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native';

const FilterNumberList = props => {
  const [selBedBtn, setSelBedBtn] = useState('any');
  // console.log('selBtn :- ',selBedBtn)
  const isFocused = useIsFocused();
  const {
    data,
    title,
    containerStyle,
    titleTextStyle,
    flatListContainerStyle,
    onPress,
    value,
    buttonStyle,
    LinearContainerStyle,
    buttonTextStyle,
  } = props;

  useEffect(() => {
    if (value) {
    } else {
      setSelBedBtn('any');
    }
  }, [value]);

  return (
    <View style={[{...containerStyle}]}>
      <Text
        style={[
          commonStyle.MEDIUM_16,
          {color: colors.black, marginHorizontal: ph(20)},
          {...titleTextStyle},
        ]}>
        {title}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        style={[{marginTop: ph(18)}, {...flatListContainerStyle}]}
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        ListHeaderComponent={<View style={styles.listPadding} />}
        ListFooterComponent={<View style={styles.listPadding} />}
        renderItem={({item}) =>
          value.type == item.type ? (
            <LinearGradient
              colors={['#0A2F1E', '#118368', '#0A2F1E']}
              style={[{borderRadius: ph(30)}, {...LinearContainerStyle}]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <TouchableOpacity
                style={[styles.button, {...buttonStyle}]}
                onPress={() => {
                  onPress(item);
                  // setSelBedBtn(item.type);
                }}>
                <Text
                  style={[
                    commonStyle.SEMIBOLD_16,
                    {color: colors.white, textAlign: 'center'},
                    {...buttonTextStyle},
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onPress(item);
                setSelBedBtn(item.type);
              }}>
              <Text
                style={[
                  commonStyle.SEMIBOLD_16,
                  {color: colors.defaultText, textAlign: 'center'},
                  {...buttonTextStyle},
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

export default FilterNumberList;

const styles = StyleSheet.create({
  button: {
    borderWidth: wp(1),
    borderColor: colors.border,
    borderRadius: ph(30),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(50),
    height: wp(50),
    // padding:ph(10)
  },
  itemSeparator: {
    width: wp(12),
    height: wp(12),
  },
  listPadding: {
    width: wp(15),
    height: ph(15),
  },
});
