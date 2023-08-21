import {createSlice} from "@reduxjs/toolkit";

const intialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: intialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload); // we are not directly mutating the state here, as it may seem. behind the scenes, redux toolkit uses immer to create a draft state, and then uses that to create the next immutable state
        },
        removeFromCart: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        }
    }
})

export const {addToCart} = cartSlice.actions;
export const {removeFromCart} = cartSlice.actions
export default cartSlice.reducer;