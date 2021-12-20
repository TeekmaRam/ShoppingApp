import React from 'react'
import { View, Text  } from 'react-native';
import {UserenterherName} from './UserEnterinput'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {Tabnavigation} from './Tabnavigation'
 import CartScreen from './screen/ShopingCartScreen/CartScreen'



const Stack = createNativeStackNavigator()

export const Navigationss = () => {
  return(
 
    <Stack.Navigator>
      <Stack.Screen name= 'Userinput' component={UserenterherName} options={{headerShown:false}}/>
      <Stack.Screen name= 'Tabnavigation' component={Tabnavigation} options={{headerShown:false}}/>
      <Stack.Screen name='Shopping' component={CartScreen} />
      </Stack.Navigator>
      
      
     
      
  )
}



