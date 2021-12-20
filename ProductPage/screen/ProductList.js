import React, { useEffect, useState } from 'react'
import { View,StyleSheet, Text, TextInput, TouchableOpacity, Image, FlatList  } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Eventvalue from '../Component/Eventvalue'

 export const ProductLists = ({navigation}) => {

    const Productstate = useSelector(state => state.krishna)


const renderlistview = ({item}) => {
  return(
  <Eventvalue  product={item}
  onPress ={() => {navigation.navigate('ProductListDetails', {ProductId: item.id})}}
  />
  )}

  return(
    <View style ={styles.backgroundstyle}>
      <Text style={styles.Productstyle}>Product List</Text>
      
     <FlatList
     data={Productstate}
     keyExtractor={item => item.id}
     renderItem={renderlistview}
     />
    
    </View>
  )
}



const styles = StyleSheet.create({

  backgroundstyle: {
  flex: 1,
},

Productstyle : {
backgroundColor: '#52FF33',
height : 150,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
fontWeight: 'bold',
fontSize: 30,
paddingTop: 70,
paddingLeft: 50
},

})