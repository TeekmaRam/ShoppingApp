import React, { useState } from 'react'
import { View,StyleSheet, Text, TextInput, TouchableOpacity, Image  } from 'react-native';





 export const UserenterherName = ({navigation}) => {
     const [text, onChangeText] = useState('Type your name')
  return(
    <View style ={styles.backgroundstyle}>
      <View style={styles.header}>
        <Text>Welcome</Text>
      </View>
      

      <View style={styles.footer}>
        <Text style={{}}>UserName</Text>
      <View>
      <Image
        source={require('./assets/products/UserEmail.png')}
        style={{height: 25, width: 25}}
         />
        <TextInput
        placeholder = 'user name'
        style = {styles.inputText}
        autoCapitalize = 'none'
        />
      </View>

      <Text style={{marginTop: 20}}>password</Text>
      <View>
      <Image
        source={require('./assets/products/Password.png')}
        style={{height: 25, width: 25}}
        
        />
        <TextInput
        placeholder = 'password'
        secureTextEntry= {true}
        style = {styles.inputpassword}
        autoCapitalize = 'none'
        />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Tabnavigation')}
      style ={{borderColor: '#009387', borderWidth: 2, marginTop: 10}} >
      <Text style={{marginLeft: 100}}>sign in</Text>
      </TouchableOpacity>
      </View>  
    </View>
  )
}



const styles = StyleSheet.create({

 backgroundstyle: {
  flex: 1,
backgroundColor: '#52FF33'
},

header : {
flex: 1,
justifyContent: 'flex-end',
paddingHorizontal: 120,
paddingBottom: 80
},

footer : {
flex: 3,
backgroundColor: '#fff',
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
paddingHorizontal: 40,
paddingTop: 20
},

inputText: {
      marginTop: -40,
      marginLeft: 30  
},

inputpassword : {
marginTop: -40,
marginLeft: 30     
}
})