import AddQuiz from './home/AddQuiz'
import AllQuiz from './home/AllQuiz'
import Question from './home/Question'
import Quizsummary from './home/Quizsummary'
import { useAppSelector } from './redux/hooks'

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz)
  return (
    <div className='max-w-7xl mx-auto mt-20  '>
      <h1 className="text-2xl md:text-4xl text-center font-semibold font-serif mb-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
        Welcome to Quiz World
      </h1>
      <AddQuiz/>
      <AllQuiz />
      {
        !quizComplete ? <Question /> : <Quizsummary />
      }
    </div>


  )
}

export default App
