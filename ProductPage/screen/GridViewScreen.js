import React, { useEffect, useState } from 'react';
import {View, FlatList, StyleSheet, Text, Dimensions} from 'react-native';
import Product from '../Component/Productlist'
import { useSelector, useDispatch } from 'react-redux';



const numColumns = 2
const width = Dimensions.get('window').width




 const GridViewScreen = ({navigation}) => {

  
   const addstate = useSelector((state) =>state)
  

   const renderItem = ({item: userData})  => { 
  return(
     <View>
    <Product  cartitem = {userData}
    navigation={() => {navigation.navigate('Productdetail', {productId: userData.id})}}  
 />

</View>
  )};

  return (
    <View style={styles.container}>
      <Text style={styles. Productstyle}>Product List</Text>
      <FlatList
        data={addstate.krishna}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns = {numColumns}        
      />
    </View>
  );
}





export default GridViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Productstyle : {
    backgroundColor: '#DAF7A6',
    height: 100,
    paddingLeft: 90,
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 30
  }
  
});

 
