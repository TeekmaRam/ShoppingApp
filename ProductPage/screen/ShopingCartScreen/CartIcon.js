import React, {useEffect, useContext, useState} from 'react'
import { View,StyleSheet, Text, TextInput, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import CartScreen from './CartScreen'





const UserenterherName = ({navigation}) => {

  const ItemAdded = useSelector(state => state.itemcarts)

  
    return(
      <TouchableOpacity onPress={() => navigation.navigate('Shopping')}>
       <View style={styles.backgroundstyle}>
         <View>
          <Text>0</Text>
          </View>
          <Icon name= 'ios-cart' size={30}/>
          </View>
          </TouchableOpacity>
  )
}



export default UserenterherName;

const styles = StyleSheet.create({

 backgroundstyle: {
padding: 5
},


})