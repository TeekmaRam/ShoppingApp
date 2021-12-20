import React, {useEffect, useContext, useState} from 'react'
import { View,StyleSheet, Text,  Image  } from 'react-native';






export const ListViewIcon = () => {
    return(
       <View>
          <Image
           source={require('../../assets/products/TablistViewIcon.png')} 
          style={{height:25, width:25}}
          />
          </View>
  )
}

