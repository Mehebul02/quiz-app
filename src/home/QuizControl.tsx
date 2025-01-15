import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const QuizControl = () => {
    const dispatch = useAppDispatch()
    const handleNextQuestion = () => {

        dispatch(nextQuestion())

    }
    return (
        <div className="flex justify-between mt-6 space-x-96 ">

            <Button onClick={()=>dispatch(previousQuestion())}>Previous</Button>
            <Button onClick={handleNextQuestion}>Next</Button>


        </div>
    );
};

export default QuizControl;