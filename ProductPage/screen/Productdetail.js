import React, { useEffect, useState } from 'react';
import { View,StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Image,  SafeAreaView, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import  {AddToCart} from '../screen/Redux/Action'

 const Productdetail = ({route}) => {

    

    const {productId} = route.params;
    const addstate = useSelector((state) =>state.krishna.find(Poroduct => Poroduct.id === productId))
    const dispatch = useDispatch()

  const  handeldispatch = () => {
    dispatch(AddToCart(addstate.id))
  } 
  
    
  return(
    <View style={{flex:1}}>
     <Text style={styles.Dtailstyle}>Product Details</Text>
     <View style={styles.backgroundstyle}>
     <ScrollView contentContainerStyle={styles.viewstyle}>
     <Image 
     style={styles.Imagestyle}
        source={addstate.image}
        />
       <View style={styles.infoContainer}>
       <Text style={styles.name}>{addstate.name}</Text>
       <Text style={styles.price}>$ {addstate.price}</Text>
       <Text style={styles.description}>{addstate.description}</Text>
        </View>
       
         <Button onPress={() => handeldispatch(addstate)} title='AddToCart' />
         </ScrollView>
     </View>
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
    paddingLeft: 60,
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

name : {
  fontSize: 30,

},

price : {
   fontSize: 30
},

description : {
  fontSize: 15,
  width: 300
}

})


export default Productdetail;
