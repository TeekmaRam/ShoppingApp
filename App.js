import React from 'react'
import { View, Text  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Navigationss} from './ProductPage/Navigation'
import { Provider } from 'react-redux';
import {Store} from './ProductPage/screen/Redux/Store'



const App = () => {
  return(
 <Provider store={Store}>
     <NavigationContainer>
     <Navigationss />  
     </ NavigationContainer>
  </Provider>
  )
}


export default App;
