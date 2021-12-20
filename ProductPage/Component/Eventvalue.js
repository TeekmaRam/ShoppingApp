import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react'
import { View,StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView  } from 'react-native';
import { connect } from 'react-redux';
import * as Action from '.././screen/Redux/Action'

class Eventvalue extends React.Component{ 
    
  render() {

const {image, name, price, id} = this.props.product    
  return(
    <View style={{flex:1}}>
    
    <TouchableOpacity style={styles.backgroundstyle} onPress={() => this.props.onPress()}>
      <Image
        style={styles.Imagestyle}
        source={image}
        />
        <View style={styles.productname}>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
    </TouchableOpacity>
<TouchableOpacity onPress={() => this.props.AddToCarts(id)} style={styles.AddToCart}>
<Text style={styles.AddToCartss}>AddToCart</Text>
</TouchableOpacity>
    
    </View>
  )
}}


const mapdispatch = (dispatch) => {
return {
  AddToCarts: (id) => dispatch(Action.AddToCart(id))
}
}


export default connect(null, mapdispatch)(Eventvalue);


const styles = StyleSheet.create({

 backgroundstyle: {
  flex: 1,
  backgroundColor: '#fff',
},

Imagestyle : {
  height: 130,
  width: 130,
  marginLeft: 30,
  justifyContent: 'space-around',
  margin: 20
},

productname : {
position: 'absolute',
left:     190,
top:      30,
},

AddToCart : {
 position: 'absolute',
marginTop: 100,
marginLeft: 200,
backgroundColor: '#A6F7F5',
height: 40,
width: 100
},

AddToCartss : {
paddingTop: 10,
paddingLeft: 10
}

})