
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";

const Question = () => {

    const { question, currentQuestionIndex } = useAppSelector((state) => state.quiz)
    const currentQuestion = question[currentQuestionIndex]
    console.log(currentQuestion);
    return (
        <div>
            <div>
                <Card className="w-[650px] ">
                    <CardHeader>
                        <CardTitle className="font-serif leading-relaxed">{currentQuestion.question}</CardTitle>
                        <CardDescription>Question :{currentQuestionIndex + 1}</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter className="flex justify-between">
                        abc
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Question;