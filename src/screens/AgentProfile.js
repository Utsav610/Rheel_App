import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../components/SafeAreaWrapper'
import HeaderView from '../components/HeaderView'
import { goBack } from '../navigation/RootNavigation'
import { colors } from '../constants/colors'

const AgentProfile = () => {
  return (
    <SafeAreaWrapper>
      <HeaderView
        title={true}
        // titleImg={true}
        titleText='Owner Profile'
        isBack={true}
        onBackPress={() => goBack()}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.ProfileImgView}>

        </View>
      </ScrollView>
    </SafeAreaWrapper>
  )
}

export default AgentProfile

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  ProfileImgView : {

  }
})