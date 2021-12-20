import {PRODUCTS} from '../../Data/Product'
import { AddToCart, Addition, Subtraction, RemoveToCart } from './Action';


const initialState = {
  krishna : PRODUCTS,
  itemcarts: [],
   total: 0,
  
}


 const Reduceraction = (state= initialState, action) => {
  if (action.type === AddToCart){
      
         let itemcart = state.krishna.find(item => item.id === action.id)
         let exit_item = state.itemcarts.find(item => action.id === item.id)
       if(exit_item){
        let items = state.itemcarts.map((item) =>{
          if(action.id ===  item.id){
            return{...item, quntity: item.quntity + 1 } 
          }
          return items
        })
        
        return{
          ...state,
          itemcarts: items,
          total: state.total + itemcart.price
        }
        
       }else{
         return{
          ...state,
          itemcarts: [...state.itemcarts, itemcart] 
         }
        }
      } 
       
         
  

        if(action.type === Addition){
          let itemcart = state.krishna.find(item => item.id === action.id)
          let exit_item = state.itemcarts.find(item => item.id === action.id)
          if(exit_item > 0){
            let Additions = state.itemcarts.map((item) => {
              if(action.id === item.id) {
              return{...item,  quntity: item.quntity + 1 }
              }
              return Additions
            })
            return {
              ...state,
              itemcarts  : Additions,
              total: state.total + itemcart.price
            }
          }

          if(action.type === RemoveToCart){
            let remove = state.itemcarts.filter(item => item.id !== action.id)
            return remove
          }

          if(action.type === Subtraction){
            let minuss = state.krishna.find(item => item.id === action.id)
            let Subtract = state.itemcarts.find(item => item.id === action.id)

            if(Subtract > 1){
              let Sub = state.itemcarts.map(item => {
                if(item.id === action.payload){
                return {...item, quntity: item.quntity - 1}
                }
                return Sub
              })
              return{
                itemcarts: sub,
                total: state.total - minuss.price
              }

              
            }else {
              if(Subtract === 1){
                let Subremove = state.itemcarts.filter(item => item.id !== action.id)
                return Subremove
              }
             
            }
          }
         
        }
        return state

      }

      export default Reduceraction;
      

     






















































        //   let exit_item = state.itemcarts.filter(item => item.id === action.id)
        //  if(exit_item.length > 0){
        //   let items = state.itemcarts.map((item) => {
        //     if(action.id == item.id){
        //      return{ ...item, quantity: item.quantity + 1}
             
        //     }
        //     return item;
        //   })
        //   return {
        //     ...state,
        //     itemcarts: items
        //   } 
        //   }else {
      
          // const addition = {...action.payload, quantity: 1}

          // state.itemcarts.push(addition)

            //  let items2 = state.itemcarts.map((item) => {
               
            //      return{...item, quantity: item.quantity == 1}
               
               
            //  })
            //  return {
            //    ...state,
            //      itemcarts: items2
            //  }
            // }
          //}

         // itemcarts.quantity == 1

          // let newTotal = state.total + itemcart.price
        //    return{
        //      ...state,
        //      itemcarts: [...state.id, itemcart],
        //      total: newTotal
        //    }
          
        //  } 
        //  }
        
   
   

  










  