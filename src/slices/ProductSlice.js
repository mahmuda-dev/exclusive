import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: 0,
}
export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ProductReducer: (state,action) => {     
      state.product = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { ProductReducer } = ProductSlice.actions

export default ProductSlice.reducer