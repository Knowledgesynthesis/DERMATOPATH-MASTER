import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { questions } from '@/data/questions'

const CasesPage = () => {
  const navigate = useNavigate()
  const [selectedCase, setSelectedCase] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const currentCase = selectedCase !== null ? questions[selectedCase] : null

  const handleCaseSelect = (index: number) => {
    setSelectedCase(index)
    setShowAnswer(false)
    setSelectedAnswer(null)
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
    setShowAnswer(true)
  }

  const handleNextCase = () => {
    if (selectedCase !== null && selectedCase < questions.length - 1) {
      handleCaseSelect(selectedCase + 1)
    }
  }

  if (selectedCase === null) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Integrated Cases</h1>
            <p className="text-muted-foreground mt-2">
              Practice pattern-based reasoning with synthetic case presentations
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {questions.map((question, index) => (
              <Card
                key={question.id}
                className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
                onClick={() => handleCaseSelect(index)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">
                    Case {index + 1}: {question.pattern ? question.pattern.charAt(0).toUpperCase() + question.pattern.slice(1) : 'Mixed'} Pattern
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {question.question}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!currentCase) return null

  const isCorrect = selectedAnswer === currentCase.correct

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button
        variant="ghost"
        onClick={() => setSelectedCase(null)}
        className="mb-4"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Cases
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Case {selectedCase + 1}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Clinical Scenario */}
          <div>
            <h3 className="font-semibold mb-2">Clinical Scenario</h3>
            <p className="text-sm text-muted-foreground">{currentCase.question}</p>
          </div>

          {/* Histologic Clues */}
          {(currentCase.epidermal_clues || currentCase.dermal_clues) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {currentCase.epidermal_clues && (
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Epidermal Clues</h4>
                  <ul className="text-sm space-y-1">
                    {currentCase.epidermal_clues.map((clue, i) => (
                      <li key={i}>• {clue}</li>
                    ))}
                  </ul>
                </div>
              )}
              {currentCase.dermal_clues && (
                <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Dermal Clues</h4>
                  <ul className="text-sm space-y-1">
                    {currentCase.dermal_clues.map((clue, i) => (
                      <li key={i}>• {clue}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* DIF Pattern if applicable */}
          {currentCase.dif && (
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">DIF Pattern</h4>
              <p className="text-sm">{currentCase.dif}</p>
            </div>
          )}

          {/* Answer Options */}
          <div className="space-y-3">
            <h3 className="font-semibold">Your Diagnosis</h3>
            <div className="grid gap-2">
              {currentCase.options.map((option) => (
                <Button
                  key={option}
                  variant={
                    showAnswer
                      ? option === currentCase.correct
                        ? 'default'
                        : option === selectedAnswer
                        ? 'destructive'
                        : 'outline'
                      : selectedAnswer === option
                      ? 'secondary'
                      : 'outline'
                  }
                  onClick={() => !showAnswer && handleAnswerSelect(option)}
                  disabled={showAnswer}
                  className="justify-start text-left h-auto py-3"
                >
                  {option}
                  {showAnswer && option === currentCase.correct && ' ✓'}
                  {showAnswer && option === selectedAnswer && option !== currentCase.correct && ' ✗'}
                </Button>
              ))}
            </div>
          </div>

          {/* Rationale */}
          {showAnswer && (
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-amber-500/10 border border-amber-500/20'}`}>
              <h4 className="font-semibold mb-2">
                {isCorrect ? '✓ Correct!' : 'Incorrect'}
              </h4>
              <p className="text-sm"><strong>Rationale:</strong> {currentCase.rationale}</p>
            </div>
          )}

          {/* Navigation */}
          {showAnswer && (
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setSelectedCase(null)}>
                Back to Cases
              </Button>
              {selectedCase < questions.length - 1 && (
                <Button onClick={handleNextCase}>
                  Next Case
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default CasesPage
