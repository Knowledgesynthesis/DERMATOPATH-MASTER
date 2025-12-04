import { useState } from 'react'
import { ChevronLeft, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { questions } from '@/data/questions'

const AssessmentPage = () => {
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleStart = () => {
    setStarted(true)
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++
      }
    })
    return { correct, total: questions.length }
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Test your knowledge of pattern-based dermatopathology with this comprehensive assessment.
              </p>

              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <h3 className="font-semibold">Assessment Details</h3>
                <ul className="text-sm space-y-1">
                  <li>• {questions.length} questions covering all major topics</li>
                  <li>• Multiple choice format</li>
                  <li>• Immediate feedback on answers</li>
                  <li>• Session-only scoring (no data saved)</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  <strong>Note:</strong> This assessment is for educational purposes only.
                  Your score is displayed only during this session and is not stored.
                </p>
              </div>
            </div>

            <Button onClick={handleStart} className="w-full" size="lg">
              Start Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const { correct, total } = calculateScore()
    const percentage = Math.round((correct / total) * 100)

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Assessment Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <div className="text-6xl font-bold text-primary">{percentage}%</div>
                <p className="text-xl text-muted-foreground">
                  You answered {correct} out of {total} questions correctly
                </p>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-3">Performance Summary</h3>
                <div className="space-y-2 text-sm">
                  {percentage >= 90 && (
                    <p className="text-green-600 dark:text-green-400">
                      Excellent! You have a strong understanding of pattern-based dermatopathology.
                    </p>
                  )}
                  {percentage >= 70 && percentage < 90 && (
                    <p className="text-blue-600 dark:text-blue-400">
                      Good work! Review the areas where you missed questions to strengthen your knowledge.
                    </p>
                  )}
                  {percentage >= 50 && percentage < 70 && (
                    <p className="text-amber-600 dark:text-amber-400">
                      Fair performance. Consider reviewing the module content and retaking the assessment.
                    </p>
                  )}
                  {percentage < 50 && (
                    <p className="text-red-600 dark:text-red-400">
                      This is a challenging subject! Review the modules carefully and practice with the cases.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Review Your Answers</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {questions.map((q, index) => {
                  const userAnswer = answers[index]
                  const isCorrect = userAnswer === q.correct
                  return (
                    <div
                      key={q.id}
                      className={`p-3 rounded-lg border ${
                        isCorrect
                          ? 'bg-green-500/10 border-green-500/20'
                          : 'bg-red-500/10 border-red-500/20'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            {index + 1}. {q.question.slice(0, 100)}...
                          </p>
                          <p className="text-sm mt-1">
                            <span className="text-muted-foreground">Your answer:</span>{' '}
                            <span className={isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                              {userAnswer || 'Not answered'}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm mt-1">
                              <span className="text-muted-foreground">Correct answer:</span>{' '}
                              <span className="text-green-600 dark:text-green-400">{q.correct}</span>
                            </p>
                          )}
                        </div>
                        <div className="ml-4">
                          {isCorrect ? (
                            <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                          ) : (
                            <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleStart} variant="outline" className="flex-1">
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Assessment
              </Button>
              <Button onClick={() => navigate('/')} className="flex-1">
                Return to Home
              </Button>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
              <strong>Remember:</strong> This score is for this session only and is not saved.
              Results are meant for self-assessment and educational purposes.
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button
        variant="ghost"
        onClick={() => setStarted(false)}
        className="mb-4"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Exit Assessment
      </Button>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Question {currentQuestion + 1}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{question.question}</p>

          <div className="space-y-2">
            {question.options.map((option) => (
              <Button
                key={option}
                variant={answers[currentQuestion] === option ? 'secondary' : 'outline'}
                onClick={() => handleAnswer(option)}
                className="w-full justify-start text-left h-auto py-3"
              >
                {option}
              </Button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AssessmentPage
