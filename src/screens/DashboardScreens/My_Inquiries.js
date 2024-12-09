import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import HeaderView from '../../components/HeaderView';
import {colors} from '../../constants/colors';
import commonStyle from '../../constants/commonStyle';
import {ph} from '../../utils/ResponsiveScreen';
import PropertyCard from '../../components/PropertyCard';
import {navigate} from '../../navigation/RootNavigation';
import {SCREEN_WIDTH} from '../../constants/constantKey';
import routeNames from '../../constants/routeNames';

const My_Inquiries = () => {
  const cardWidth = SCREEN_WIDTH / 1.3 + ph(18);
  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        // titleImg={true}
        titleText="My Inquiries"
        // isBack={true}
        // onBackPress={() => goBack()}
      />
        <Text
          style={[
            commonStyle.SEMIBOLD_20,
            {color: colors.black, marginHorizontal: ph(20), marginTop: ph(21)},
          ]}>
          Inquiries List
        </Text>
      <ScrollView style={styles.scrollContainer}>
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1]}
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardWidth}
          decelerationRate="fast"
          scrollEventThrottle={16}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListHeaderComponent={<View style={styles.listPadding} />}
          ListFooterComponent={<View style={styles.listPadding} />}
          renderItem={({item}) => (
            <PropertyCard
              onPress={() => navigate(routeNames.PropertyDetails)}
              Date="Date of Inquiries"
              // cardContainerStyle={{marginHorizontal:ph(20)}}
            />
          )}
        />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default My_Inquiries;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
});
