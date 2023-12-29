import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [
        
    ]
    
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            
            const existingItem = state.cartItems.find((item)=>item.id===action.payload.id)       
            if (existingItem) {
                state.cartItems=state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            } else {
                state.cartItems.push({...action.payload,quantity:1})
                
            }
        },
        removefromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        clearCart(state, action) {
            state.cartItems = []
        },
        deleteQuantity(state, action) {
            const element = state.cartItems.find((item) => item.id === action.payload)
            if (element.quantity > 1) {
                state.cartItems=state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
            }
            else {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            }
        }
        
    }

})

export const {addToCart,deleteQuantity,removefromCart,clearCart}=cartSlice.actions;

export default cartSlice.reducer;