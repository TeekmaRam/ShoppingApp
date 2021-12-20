import React, {useEffect, useContext, useState} from 'react'
import { View, Text,  Image  } from 'react-native';







export const GridIcon = () => {
    return(
       <View>
          <Image
           source={require('../../assets/products/TabGridViewIcon.png')} 
          style={{height:25, width:25}}
          />
          </View>
  )
}

