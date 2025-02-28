import { createSlice } from '@reduxjs/toolkit'
import { quizData } from '@/home/quizData'



export type TQuiz = {
    _id: string,
    name: string,
    description: string,
    question: TQuizData[],
    createAt: string,
    updateAt: string,
}



export type TQuizData = {
    question: typeof quizData,
    currentQuestionIndex: number,
    userAnswers: (string | null),
    quizComplete: boolean
}
const initialState = {

    question: [],
    currentQuestionIndex: 0,
    userAnswers: Array(quizData.length).fill(null),
    quizComplete: false

}
export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {

        setAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload
            state.userAnswers[questionIndex] = answer
            console.log(questionIndex, answer);
        },
        nextQuestion: (state) => {

            if (state.currentQuestionIndex < state.question.length - 1) {
                state.currentQuestionIndex += 1;
            }

        },
        previousQuestion: (state) => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex -= 1;
            }
        },
        completeQuiz: (state) => {
            state.quizComplete = true

        },
        setQuiz: (state, action) => {
            state.question = action.payload
        }

    }
})


export const { setAnswer, nextQuestion, previousQuestion, completeQuiz, setQuiz } = quizSlice.actions

// export const selectCount = (state: RootState) => state.counter.value


export default quizSlice.reducer
