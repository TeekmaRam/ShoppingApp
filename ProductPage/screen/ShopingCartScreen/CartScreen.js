import React, {useEffect, useState} from 'react'
import { View,StyleSheet, Text, TextInput, TouchableOpacity, Image, FlatList, Button  } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {Addition, RemoveToCart, Subtraction} from '../Redux/Action'


 const CartScreen = () => {

const Cartitem = useSelector(state => state.itemcarts)
 const dispatch = useDispatch()

 const Removehandle = (id) => {
   dispatch(RemoveToCart(id))
}


const Incriment = (id) => {
   dispatch(Addition(id))
}

const Dicriment = (id) => {
   dispatch(Subtraction(id))
}


const addition = ({item}) => {
 console.log(item.quntity)
return(
   <View style={styles.Imagebackground}>
      <View style={styles.namestyles}>
      <Image
        style={styles.Imagestyle}
        source={item.image}
        /> 
       <Text>{item.name}</Text>
        </View>
        <TouchableOpacity onPress={(item) => Removehandle(item.id)} style={styles.incriment}>
          <Text style={styles.remove}>Remove</Text>
          </TouchableOpacity>
       
        <View style={styles.Buttontouch}>
        <Text style={styles.price}>{item.price * item.quntity}</Text>
       <TouchableOpacity onPress={(item) => Incriment(item.id)} style={styles.incriment}>
          <Text style={styles.plus}>+</Text>
       </TouchableOpacity>


       <Text style={styles.counting}>{item.quntity}</Text>
       
       <TouchableOpacity onPress={() => Dicriment(item.id)} style={styles.dicriment}>
          <Text style={styles.minus}>-</Text> 
       </TouchableOpacity>
        </View>
   </View>
   
)
} 

    return(
       
       <View style={styles.backgroundstyle}>
          {Cartitem.length === 0 ? (
       <View>
          <Text>cart is emity</Text>
       </View>
       
          ): (<View>
            <View style={styles.Products}>
               <Text style={styles.Product}>Product</Text>
               <Text style={styles.stringPrice}>price</Text>
            </View>
           <FlatList
           data={Cartitem}
           renderItem={addition}
            keyExtractor={item => item.id}
       />  
          </View>)}
          </View>
         
         
  )
}




 export default CartScreen;



const styles = StyleSheet.create({

   Imagebackground: {
 flexDirection: 'row'
   },

   namestyles : {
      marginLeft: 5,
      fontWeight: 'bold'
  },

   Imagestyle : {
      flex: 1,
       height: 140,
       width: 140, 
      marginLeft: 2,
      marginTop: 30,
      margin: 10
  },


  Buttontouch: {
position: 'absolute',
flexDirection: 'row',
marginTop: 80,
marginLeft: 180
  },

  remove: {
   position: 'absolute',
   marginTop: 130,
   marginLeft: 50
  },

  price: {
  paddingLeft: 35,
  fontSize: 20
  },

  plus : {
     fontSize: 20,
     paddingLeft: 20,
     height: 20,
  },

  counting: {
  fontSize: 20,
  paddingLeft: 20
  },

  minus : {
   fontSize: 20,
   paddingLeft: 20
},
Products: {
   flexDirection: 'row'
},

Product: {
   paddingTop: 20,
   paddingLeft: 30
},

stringPrice: {
   paddingTop: 20,
   paddingLeft: 110
}

})