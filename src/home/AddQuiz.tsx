import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

type TQuizData = {
  title: string,
  description: string,
  questions: {
    question: string,
    option: string[],
    correctAnswer: string,

  }[]
}

const AddQuiz = () => {
  const [step, setSteo] = useState(1);
  const [addQuestionStep, setAddQuestionStep] = useState(1);
  const [quizData, setQuizData] = useState<TQuizData>({
    title: '',
    description: '',
    questions: [],
  })
  const [newQuestion, setQuestion] = useState({
    question: '',
    option: ['', '', ''],
    correctAnswer: '',
  })
  const [openAddQuestion, setOpenAddQestion] = useState(false)
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Quiz</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Quiz</DialogTitle>
            <DialogDescription>
             {step === 1 && 'Step 1:Enter the quiz details'}
             {step === 2 && 'Step 2:Add Questions'}
             {step === 3 && 'Step 3:Submit'}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddQuiz;