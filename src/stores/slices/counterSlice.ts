

// src/store/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // @param Menambah nilai counter sebesar 1
    },
    decrement: (state) => {
      state.value -= 1; // @param Mengurangi nilai counter sebesar 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload; // @param Menambah nilai counter berdasarkan jumlah yang diberikan
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
