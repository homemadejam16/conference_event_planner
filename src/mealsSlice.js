// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    {
      name: "breakfast",
      cost: 50,
      selected: false,
    },
    {
      name: "high tea",
      cost: 25,
      selected: false,
    },
    {
      name: "lunch",
      cost: 65,
      selected: false,
    },
    {
      name: dinner,
      cost: 70,
      selected: false,
    },
  ],

  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
