import { createSlice } from '@reduxjs/toolkit'
import { quizData } from '@/home/quizData'


export interface IQuiz {
    question: typeof quizData,
    currentQuestionIndex: number,
    userAnswers: (string | null),
    quizComplete: boolean
}
const initialState = {

    question: quizData,
    currentQuestionIndex: 0,
    userAnswers: Array(quizData.length).fill(null),
    quizComplete: false

}
export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {

    }
})


// export const { } = quizSlice.actions

// export const selectCount = (state: RootState) => state.counter.value


export default quizSlice.reducer
