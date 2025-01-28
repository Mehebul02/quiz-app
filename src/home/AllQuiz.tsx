import { useGetQuizQuery } from "@/redux/api/quizApi";
import QuizCard from "./QuizCard";
import { TQuiz } from "@/redux/features/quiz/quizSlice";

const AllQuiz = () => {
    const { data, isLoading } = useGetQuizQuery(undefined);
    console.log(data);
    if(isLoading){
        return <p className="text-4xl text-red-600 flex justify-center items-center">Loading......</p>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data?.map((quiz:TQuiz,idx:string)=>(
                    <QuizCard key={idx} quiz={quiz}/>
                ))
            }

            
        </div>
    );
};

export default AllQuiz;