import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const QuizCard = ({quiz}) => {
    return (
        <Card className="p-4 hover:shadow-lg cursor-pointer">
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