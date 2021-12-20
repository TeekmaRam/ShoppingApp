import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView,TouchableOpacity, Image, Button} from 'react-native';
import { connect } from 'react-redux';
import * as Action from '.././screen/Redux/Action'


  class Product extends React.Component{
    constructor(props){
        super(props); 
    }
    
render(){
  
    const {name, price, image, id } = this.props.cartitem
  return (
    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation()}>
        <Image
        style={styles.Imagestyle}
        source={image}
        />
        <View style={styles.namestyles}>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
        <Button onPress={ () => this.props.AddToCart(id)} title = 'Add' style={styles.Button} />
    </TouchableOpacity>
  );
}
 }

 const maptoprops = (dispatch) => {
   return{
   
  AddToCart: (id) => dispatch(Action.AddToCart(id))
   }
 }


  
  
  export default connect(null, maptoprops) (Product);

 
const styles = StyleSheet.create({
    card: {
       flex: 1, 
       margin: 5,
       flexWrap: "wrap",
       
    },
    
    Imagestyle : {
        flex: 1,
         height: 140,
         width: 140, 
        marginLeft: 30,
        marginTop: 30,
        margin: 10
    },

    namestyles : {
        marginLeft: 20,
        fontWeight: 'bold'
    },
    Button : {
        
        width: 2,
        height: 5
    }

})