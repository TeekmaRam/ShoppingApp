import { createStore,  applyMiddleware } from 'redux'
import Reduceraction from './Reducer'
import thunk from 'redux-thunk'

 export const Store = createStore(Reduceraction, applyMiddleware(thunk))

 Store.subscribe(() => console.log(Store.getState()))