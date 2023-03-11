import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    update: (state, action) => {
        state.value.map((t) => {
            if(action.payload.id === t.id) {
                t.item = action.payload.item
            }
            return t;
        })
    },
    remove: (state, action) => {
        const id = action.payload
        state.value = state.value.filter((t) => t.id !== id)
    },
  },
})

export const { add,update,remove, } = todoSlice.actions

export default todoSlice.reducer