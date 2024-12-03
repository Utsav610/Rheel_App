import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../constants/colors'
import { images } from '../../constants/images'
import { wp } from '../../utils/ResponsiveScreen'
import { navigate } from '../../navigation/RootNavigation'
import routeNames from '../../constants/routeNames'

const Splash = () => {
    useEffect(() => {
        setTimeout(() => {
            navigate(routeNames.Splash_2)
        }, 2000);
    })
  return (
    <View style={{flex: 1,backgroundColor:colors.white,alignItems:'center',justifyContent:'center'}}>
      <Image source={images.logo} style={{width:wp(300),height:wp(150)}}/>
    </View>
  )
}

export default Splash