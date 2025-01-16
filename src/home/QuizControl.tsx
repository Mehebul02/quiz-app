import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
    const { question, currentQuestionIndex, userAnswers } = useAppSelector((state) => state.quiz)
    const dispatch = useAppDispatch()
    const handleNextQuestion = () => {

        dispatch(nextQuestion())

    }
    return (
        <div className="flex justify-between mt-6 space-x-96 ">

            <Button
                disabled={currentQuestionIndex === 0}
                onClick={() => dispatch(previousQuestion())}>Previous</Button>
            {
                currentQuestionIndex < question.length - 1 && (
                    <Button onClick={handleNextQuestion}>Next</Button>

                )
            }
            {
                currentQuestionIndex === question.length - 1 && (
                    <Button >Complete Quiz</Button>

                )
            }

        </div>
    );
};

export default QuizControl;