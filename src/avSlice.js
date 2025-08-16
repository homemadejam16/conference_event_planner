import { createSlice } from "@reduxjs/toolkit";


export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "/img/speakers-4109274_1280.jpg",
      name: "Speaker",
      cost: 45,
      quantity: 0,
    },
    {
      img: "/img/business-20031_1280.jpg",
      name: "projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "/img/public-speaking-3926344_1280.jpg",
      name: "microphones",
      cost: 35,
      quantity: 0,
    },
    {
      img: "/img/whiteboard-2903269_1280.png",
      name: "whiteboards",
      cost: 80,
      quantity: 0,
    },
    {
      img: "/img/signpost-235079_1280.jpg",
      name: "signage",
      cost: 80,
      quantity: 0,
    },
  ],


reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});
export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;
export default avSlice.reducer;