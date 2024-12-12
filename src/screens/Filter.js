import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HeaderView from '../components/HeaderView';
import { goBack } from '../navigation/RootNavigation';
import CustomButton from '../components/CustomButton';
import { colors } from '../constants/colors';
import { ph, wp } from '../utils/ResponsiveScreen';
import SellPropertyForm from '../components/SellPropertyForm';
import RentPropertyForm from '../components/RentPropertyForm';
import FilterSell from './FilterSell';
import FliterRent from './FliterRent';

const  Filter = () => {
    const [formType, setFormType] = useState('Sell');
  
    return (
      <SafeAreaWrapper>
        <HeaderView
          isBack={true}
          onBackPress={() => goBack()}
          title={true}
          titleText="Filter"
        />
        
          <View style={styles.typeFormView}>
            <CustomButton
              onPress={() => setFormType('Sell')}
              isLinear={formType == 'Sell' ? true : false}
              linearStyle={{
                paddingVertical: ph(8),
                paddingHorizontal: ph(20),
              }}
              style={{
                backgroundColor: colors.white,
                borderWidth: wp(1),
                paddingVertical: ph(8),
                paddingHorizontal: ph(20),
              }}
              title="Sell"
              textStyle={{
                color: formType == 'Sell' ? colors.white : colors.black,
              }}
            />
            <CustomButton
              onPress={() => setFormType('Rent')}
              isLinear={formType == 'Rent' ? true : false}
              linearStyle={{
                paddingVertical: ph(8),
                paddingHorizontal: ph(20),
              }}
              style={{
                backgroundColor: colors.white,
                borderWidth: 1,
                paddingVertical: ph(8),
                paddingHorizontal: ph(20),
              }}
              title="Rent"
              textStyle={{
                color: formType == 'Rent' ? colors.white : colors.black,
              }}
            />
          </View>
          {formType == 'Sell' && <FilterSell /> || <FliterRent />}
          
      </SafeAreaWrapper>
    );
  };
  
  export default Filter;
  
  const styles = StyleSheet.create({
    typeFormView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: ph(10),
      marginHorizontal: ph(20),
      gap: ph(15),
    },
    image: {
      width: 75,
      height: 75,
      // margin: 10,
    },
  });
  