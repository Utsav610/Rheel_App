import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import HeaderView from '../../components/HeaderView';
import {goBack} from '../../navigation/RootNavigation';
import {ph, wp} from '../../utils/ResponsiveScreen';
import {SCREEN_WIDTH} from '../../constants/constantKey';
import {colors} from '../../constants/colors';
import {images} from '../../constants/images';
import ProfileEditIcon from '../../assets/images/ProfileEditIcon';
import commonStyle from '../../constants/commonStyle';
import RightArrowIcon from '../../assets/images/RightArrowIcon';
import ProfileRightArrowIcon from '../../assets/images/ProfileRightArrowIcon';

const Profile = () => {
  console.log(SCREEN_WIDTH / 4 - 15);
  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        // titleImg={true}
        titleText="Profile"
        isBack={true}
        onBackPress={() => goBack()}
      />
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.profileImageView}>
        <Image
          source={images.defaultProfileImg}
          style={{width: SCREEN_WIDTH /4 -15, height: SCREEN_WIDTH / 4 - 15}}
        />
        <View style={{padding:ph(10),backgroundColor:colors.seperation,position:'absolute',bottom:ph(0),right:ph(10),borderRadius:ph(20)}}>
          <ProfileEditIcon />
        </View>
      </View>
      <View style={styles.accountSettingView}>
        <Text style={[commonStyle.REGULAR_18,{color:'#ADADAD'}]}>Account Setting</Text>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[commonStyle.REGULAR_18,{color:colors.black}]}>Edit profile</Text>
          <ProfileRightArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[commonStyle.REGULAR_18,{color:colors.black}]}>Settings</Text>
          <ProfileRightArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[commonStyle.REGULAR_18,{color:colors.black}]}>Delete account</Text>
          <ProfileRightArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[commonStyle.REGULAR_18,{color:colors.black}]}>Share</Text>
          <ProfileRightArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[commonStyle.REGULAR_18,{color:colors.black}]}>Faq</Text>
          <ProfileRightArrowIcon />
        </TouchableOpacity> 
      </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  profileImageView: {
    marginTop: ph(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: ph(3),
    borderColor: colors.minColor,
    borderWidth: wp(3),
    borderRadius: SCREEN_WIDTH / 2.8,
  },
  accountSettingView: {
    margin:ph(20),
    backgroundColor:colors.white
  },
  btnStyle:{
    flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:ph(25),marginRight:ph(20)
  }
});
