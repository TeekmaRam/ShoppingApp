import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import GridViewScreen from './screen/GridViewScreen'
import Productdetail from './screen/Productdetail'
import {ProductLists} from './screen/ProductList'
import {ProductListDetails} from './screen/ProductListDetails'
import {ListViewIcon} from './screen/TabIcon/ListviewIcon' 
import {GridIcon} from './screen/TabIcon/GridIcon'
import UserenterherName from './screen/ShopingCartScreen/CartIcon'


const Tab = createBottomTabNavigator()                   
const Stack = createNativeStackNavigator()
const Gridstack = createNativeStackNavigator()

function EventListNameStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name= 'ProductLists' component={ProductLists} 
      options={({navigation}) => ({
        title: 'Product',
        headerTitleStyle:styles.headerTitleStyles,
       headerRight: () => <UserenterherName navigation={navigation}/>
      })}/>
      <Stack.Screen name= 'ProductListDetails' component={ProductListDetails}
      options={({navigation}) => ({
        title: 'Product',
        headerTitleStyle:styles.headerTitleStyles,
       headerRight: () => <UserenterherName navigation={navigation}/>
      })}/>
    </Stack.Navigator>
  )
}

function GridviewStack() {
  return(
    <Gridstack.Navigator>
      <Gridstack.Screen name= 'overview' component={GridViewScreen}
       options={({navigation}) => ({
        title: 'Product',
        headerTitleStyle:styles.headerTitleStyles,
       headerRight: () => <UserenterherName navigation={navigation}/>
      })}/>
      <Stack.Screen name= 'Productdetail' component={Productdetail} 
      options={({navigation}) => ({
        title: 'Shopping',
        headerTitleStyle: styles.headerTitleStyle,
       headerRight: () => <UserenterherName navigation={navigation}/>
      })}/>
      
      
    </Gridstack.Navigator>
  )
}

export const Tabnavigation = () => {
      return(
      <Tab.Navigator>
          <Tab.Screen name='listView' component={EventListNameStack}
            options={{
              headerShown:false,
              headerTitleStyle: styles.listviewstyle,
              tabBarIcon:({color}) =>( <ListViewIcon />),
            }}/>

          <Tab.Screen name='Gridview' component = {GridviewStack}
             options={{headerShown:false,
             headerTitleStyle: styles.GridIconStyle,
             tabBarIcon: ({color}) => (<GridIcon />)
             }}/>
      </Tab.Navigator> 
      
  )
}
  
  
  
  const styles = StyleSheet.create({
    headerTitleStyles : {
    }
  })