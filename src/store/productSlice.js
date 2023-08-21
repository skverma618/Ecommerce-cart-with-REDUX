import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    data: [], // as API req can also have errors other than products, we created a data array inside the state
};

// const dispatch = useDispatch();
const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        fetchProducts: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = () => {
    return async function(dispatch, getState){
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json();
        dispatch(fetchProducts(products))
    }
}



