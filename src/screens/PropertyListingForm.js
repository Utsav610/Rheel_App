import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DropDownView from '../components/DropDownView';
import {fontPixel, ph, wp} from '../utils/ResponsiveScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import HeaderView from '../components/HeaderView';
import {goBack} from '../navigation/RootNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {Formik} from 'formik';
import InputText from '../components/TextInputView';
import {SCREEN_WIDTH} from '../constants/constantKey';
import commonStyle from '../constants/commonStyle';
import {fonts, fontSize} from '../constants/fonts';
import FilePickerButton from '../components/FilePickerButton';
import ImagePicker from 'react-native-image-crop-picker';
import {images} from '../constants/images';
import SellPropertyForm from '../components/SellPropertyForm';
import RentPropertyForm from '../components/RentPropertyForm';

const PropertyListingForm = () => {
  const [formType, setFormType] = useState('Sell');
  
  return (
    <SafeAreaWrapper>
      <HeaderView
        isBack={true}
        onBackPress={() => goBack()}
        title={true}
        titleText="Property Listing"
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
              borderWidth: 1,
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
        {formType == 'Sell' && <SellPropertyForm /> || <RentPropertyForm />

        }
        
    </SafeAreaWrapper>
  );
};

export default PropertyListingForm;

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
