import { createSlice } from "@reduxjs/toolkit";

const results = "https://api.unsplash.com/search/photos?client_id=Fkqdx4hhg-PiWkXTTyvja3Q241c5twL2XN2G9-zF1ZM&page=1&query="

const initialState = {
    products: [],
    amount: 4,
    theme: 'dark',
    user: null,
}

const likedSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        incrementAmount: (state, { payload }) => {
            const item = state.products.find((item) => item.name === payload.name)
            item.amount++
        },
        removeItem: () => {

        },
        // incrementAmount: (state, { payload }) => {
        //     const item = state.products.find((item) => item.name === payload.name)
        //     item.amount++
        // },
        // decrementAmount: (state, { payload }) => {
        //     const item = state.products.find((item) => item.name === payload.name)
        //     item.amount--
        // },
        // removeItem: (state, { payload }) => {
        //     state.products = state.products.filter((item) => item.name !== payload.name)
        // },
        // updateTotal: (state) => {
        //     let amount = 0
        //     let total = 0

        //     state.products.forEach((item) => {
        //         amount += item.amount
        //         total += item.amount * item.price
        //     })

        //     state.amount = amount
        //     state.total = total
        // },
        userSetting: (state, { payload }) => {
            state.user = payload
        }
    },
});

// export const { incrementAmount, decrementAmount, removeItem, updateTotal } = shopSlice.actions

export const { userSetting } = likedSlice.actions

export default likedSlice.reducer