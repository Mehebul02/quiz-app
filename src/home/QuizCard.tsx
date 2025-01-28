import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { setQuiz } from "@/redux/features/quiz/quizSlice";
import { useDispatch } from "react-redux";
  
const QuizCard = ({quiz}) => {
  const dispatch = useDispatch()

    const handleQuiz = (questions)=>{
        console.log(questions);
    }
    return (
        <Card onClick={()=>handleQuiz(dispatch(setQuiz(quiz.questions)))} className="p-4 hover:shadow-lg cursor-pointer">
  <CardHeader>
    <CardTitle>{quiz.title}</CardTitle>
    <CardDescription>{quiz.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p></p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    );
};

export default QuizCard;<h1>Card</h1>