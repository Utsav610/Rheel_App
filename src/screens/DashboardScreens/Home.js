import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import HeaderView from '../../components/HeaderView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ph, wp} from '../../utils/ResponsiveScreen';
import {images} from '../../constants/images';
import InputText from '../../components/TextInputView';
import Carousel from 'react-native-banner-carousel';
import {SCREEN_WIDTH} from '../../constants/constantKey';
import commonStyle from '../../constants/commonStyle';
import {fonts, fontSize} from '../../constants/fonts';
import PropertyCard from '../../components/PropertyCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {navigate} from '../../navigation/RootNavigation';
import routeNames from '../../constants/routeNames';

const Home = () => {
  const [txtSearch, setTxtSearch] = useState('');
  const cardWidth = SCREEN_WIDTH / 1.3 + ph(18);

  const renderItem = ({imagename, index}) => {
    return (
      <View
        style={{
          marginHorizontal: ph(18),
          // width: SCREEN_WIDTH,
        }}>
        <Image
          style={{
            aspectRatio: 16 / 9,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg',
          }} // If imagesData is an array of image URLs
        />
      </View>
    );
  };

  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        titleImg={true}
        leftComponent={
          <TouchableOpacity style={styles.profileButton}>
            <Image source={images.profileLogo} style={styles.profileImage} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={styles.addButton}>
            <Icon name={'plus'} size={wp(30)} color={'black'} />
          </TouchableOpacity>
        }
      />
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.mainContainer}>
          <InputText
            placeholder="Search by location"
            leftComponent={<Icon name="magnify" size={25} />}
            value={txtSearch}
            containerStyle={styles.searchContainer}
            maxLength={50}
            onChangeText={text => setTxtSearch(text)}
          />
          <View style={styles.carouselContainer}>
            <Carousel
              autoplay={!__DEV__}
              autoplayTimeout={3000}
              index={0}
              useNativeDriver={true}
              showsPageIndicator={true}
              pageIndicatorOffset={16}
              pageIndicatorStyle={styles.pageIndicator}
              activePageIndicatorStyle={styles.activePageIndicator}>
              {[1, 1, 1].map((imagename, index) =>
                renderItem(imagename, index),
              )}
            </Carousel>
          </View>
          <View style={styles.topPropertiesContainer}>
            <Text style={[commonStyle.titleText,{color:colors.title}]}>Top Properties</Text>
            <TouchableOpacity
              onPress={() => navigate(routeNames.AllProperties)}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardWidth}
            decelerationRate="fast"
            scrollEventThrottle={16}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            ListHeaderComponent={<View style={styles.listPadding} />}
            ListFooterComponent={<View style={styles.listPadding} />}
            renderItem={({item}) => <PropertyCard />}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: ph(10),
  },
  profileButton: {
    borderRadius: wp(50),
    borderWidth: 1,
  },
  profileImage: {
    width: wp(60),
    height: wp(60),
  },
  addButton: {
    backgroundColor: colors.backgroundContainer,
    borderRadius: wp(50),
    borderColor: colors.border,
    borderWidth: 1,
    padding: ph(13),
  },
  searchContainer: {
    paddingHorizontal: ph(20),
    borderColor: colors.border,
    marginHorizontal: ph(18),
  },
  carouselContainer: {
    marginTop: ph(20),
  },
  carouselItem: {
    marginHorizontal: ph(18),
  },
  carouselImage: {
    aspectRatio: 16 / 9,
    resizeMode: 'contain',
  },
  pageIndicator: {
    backgroundColor: colors.white,
  },
  activePageIndicator: {
    backgroundColor: 'green',
  },
  topPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: ph(18),
    marginTop: ph(20),
  },
  seeAllText: {
    fontFamily: fonts.SEMIBOLD,
    fontSize: fontSize.FS_16,
    color: colors.defaultText,
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
