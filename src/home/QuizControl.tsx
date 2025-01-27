import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, previousQuestion,  } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
    const { question, currentQuestionIndex, userAnswers, } = useAppSelector((state) => state.quiz)

    const answerSelected = userAnswers[currentQuestionIndex] !==null
    const dispatch = useAppDispatch()
    const handleNextQuestion = () => {

        dispatch(nextQuestion())

    }

    const isCompletedQuiz = answerSelected || currentQuestionIndex !== question.length -1
    return (
        <div className="flex justify-between  w-full">

          
            <Button
                disabled={currentQuestionIndex === 0}
                onClick={() => dispatch(previousQuestion())}>Previous</Button>
           
            {
                currentQuestionIndex < question.length - 1 && (
                    <Button disabled={!answerSelected} onClick={handleNextQuestion}>Next</Button>

                )
            }
           
           
           {
                currentQuestionIndex === question.length - 1 && (
                    <Button disabled={!isCompletedQuiz} onClick={()=>dispatch(completeQuiz())}>Complete Quiz</Button>

                )
            }
         

        </div>
    );
};

export default QuizControl;