import React, { useEffect, useState } from 'react'
import { View,StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart } from './Redux/Action';

 export const ProductListDetails = ({route}) => {
     
const {ProductId} = route.params

const ProductListDetails = useSelector(state => state.krishna.find(item => item.id === ProductId))

const dispatch = useDispatch()

const AddToCarts = (id) => {
dispatch(AddToCart(id))
}

  return(
   <View style={{flex:1}}>
     <Text style={styles.Dtailstyle}>Product Details</Text>
   <ScrollView style={styles.backgroundstyle}>
     <View style={styles.viewstyle}>
       <Image
       style={styles.Imagestyle}
       source={ProductListDetails.image}
       />
       <Text style={styles.namestyle}>{ProductListDetails.name}</Text>
       <Text style={styles.pricestyle}>{ProductListDetails.price}</Text>
       <Text style={styles.descriptionstyle}>{ProductListDetails.description}</Text>
       </View>
       <TouchableOpacity onPress={() => AddToCarts(ProductListDetails.id)}><Text>AddToCart</Text></TouchableOpacity>
   </ScrollView>
   </View>
   
  )
}



const styles = StyleSheet.create({

  Dtailstyle : {
    flex: 0.4,
    height: 20,
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 70,
    paddingLeft: 70,
    backgroundColor: '#52FF33',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },

  backgroundstyle: {
   flex: 1,
   backgroundColor: '#fff',
   },

   viewstyle : {
    alignItems: 'center',
    paddingTop: 40
   },

Imagestyle : {
   width: 290,
   height: 190
},

namestyle : {
  fontSize: 30,

},

pricestyle : {
   fontSize: 30
},

descriptionstyle : {
  fontSize: 15,
  width: 300
}

})