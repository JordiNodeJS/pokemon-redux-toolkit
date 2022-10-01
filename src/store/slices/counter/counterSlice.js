import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counterType',
  initialState: {
    counter: 100
  },
  reducers: {
    increment: state => {
      state.counter += 1
    },
    incrementBy: (state, action) => {
      console.log(action)
      state.counter += action.payload
    },
    decrement: state => {
      state.counter -= 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions
