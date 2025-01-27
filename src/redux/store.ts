import { configureStore } from '@reduxjs/toolkit'
import { quizSlice } from './features/quiz/quizSlice'
import { quizApi } from './api/quizApi'



export const store = configureStore({
    reducer: {
        [quizApi.reducerPath]: quizApi.reducer,
        quiz: quizSlice.reducer

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(quizApi.middleware)
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store