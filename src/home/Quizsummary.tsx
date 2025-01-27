import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hooks";

const Quizsummary = () => {

    const { question, userAnswers } = useAppSelector((state) => state.quiz)

    const correctAnswerCount = question.reduce((count, qnt, index) => {
        return qnt.correctAnswer === userAnswers[index] ? count + 1 : count
    }, 0)

    const incorrectAnswer =question.length-correctAnswerCount

    const correctPercentage = Math.floor((correctAnswerCount / question.length) * 100);
    console.log(correctPercentage);

    return (
        <div className='flex justify-center mt-10'>

            <Card className="w-[450px] p-4">
                <CardHeader className='text-3xl font-semibold font-serif text-center'>Quiz Summary</CardHeader>
                <CardContent>
                    <h1 className="text-[18px] text-center font-sans font-medium">You got {correctAnswerCount} out of {question.length}</h1>

                    <div className="flex justify-center mt-5">

                        <Progress value={correctPercentage} className=" bg-purple-500" />
                        
                    </div>
                    <div className="flex justify-between mt-4 text-md font-medium font-sans">
                    <h1> {correctPercentage}%</h1>
                            <h1>Performance: {correctPercentage>= 0 ?"Good":"Keep trying!"}</h1>
                            
                        </div>
                        <h1 className="text-md font-bold font-sans mt-4">Incorrect Answer: <span className="font-medium">{incorrectAnswer}</span></h1>
                
                        <h1 className="text-[18px] text-center font-semibold mt-6 ">{correctPercentage>= 0 ?"Great job! You're doing well!👏":"Keep trying! Practice makes perfect!😢"}</h1>
                </CardContent>
            </Card>
        </div>
    );
};

export default Quizsummary;