import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../quiz/store'


export interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0
}
const quizSlice = createSlice({
    name: '',
    initialState,
    reducers: {

    }
})


export const { } = quizSlice.actions

export const selectCount = (state: RootState) => state.counter.value


export default quizSlice.reducer
