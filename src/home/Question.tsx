
import { logo } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";

const Question = () => {

    const dispatch = useAppDispatch()

    const { question, currentQuestionIndex,userAnswers } = useAppSelector((state) => state.quiz)
    const currentQuestion = question[currentQuestionIndex]
    const currentAnswer = userAnswers[currentQuestionIndex]
    console.log(currentAnswer);
    console.log(currentQuestion);

    const handleAnswerChange = (answer: string) => {
        console.log(answer);
        dispatch(setAnswer({questionIndex:currentQuestionIndex,answer}))
    }
    return (
        <div>
            {question.length > 0 && <div className="flex justify-center">
                <Card className="w-[350px] md:w-[650px] ">
                    <img className="w-32 mx-auto" src={logo} alt="logo" />
                    <CardHeader>
                        <CardTitle className="font-serif leading-relaxed">{currentQuestion.question}</CardTitle>
                        <CardDescription>Question :{currentQuestionIndex + 1} of {question.length}</CardDescription>
                    </CardHeader>
                    <CardContent>

                        {
                            currentQuestion.options.map((option, index) => <Button
                                onClick={() => handleAnswerChange(option)
                                }
                                key={index} size={'lg'} className=" w-full mt-3" variant={option === currentAnswer ? 'default' :'outline'}>
                                {option}
                            </Button>)
                        }

                    </CardContent>
                    <CardFooter className="w-full mx-auto">
                        <QuizControl/>
                    </CardFooter>
                </Card>
            </div>}
        </div >
    );
};

export default Question;