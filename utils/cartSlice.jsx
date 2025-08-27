import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        totalPrice : 0
    },
    reducers : {
        addItem : (state, action) => {
            const existingItem = state.items.find((item)=>item.card.info.id===action.payload.card.info.id)
            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
                    state.items.push({...action.payload,quantity:1});
            }

            state.totalPrice = state.items.reduce((sum,item)=>{
                return sum +=((item.card.info.price || item.card.info.defaultPrice)/100) * item.quantity;
            },0)
            
        },
        removeItem : (state, action) => {
             state.items = state.items.filter((item) => item.card.info.id != action.payload)
            state.totalPrice = state.items.reduce((sum,item)=>{
                return sum +=((item.card.info.price || item.card.info.defaultPrice)/100) * item.quantity;
            },0)
        },
        clearItem : (state, action) => {
           state.items.length =0;

        },
        updateItems : (state ,action) =>{
            const itemFind = state.items.find((item) => item.card.info.id === action.payload.id)
            if(itemFind){
                itemFind.quantity = action.payload.quantity;
                 state.totalPrice = state.items.reduce((sum,item)=>{
                return sum +=((item.card.info.price || item.card.info.defaultPrice)/100) * item.quantity;
            },0)
    
            }

        }
    }
})

export const { addItem, removeItem, clearItem ,updateItems} = cartSlice.actions;

export default cartSlice.reducer;