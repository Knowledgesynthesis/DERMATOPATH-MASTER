import { create } from 'zustand'

interface AssessmentState {
  currentScore: number
  totalQuestions: number
  currentQuestionIndex: number
  answers: Record<number, string>
  setAnswer: (questionIndex: number, answer: string) => void
  incrementScore: () => void
  resetAssessment: () => void
  nextQuestion: () => void
}

export const useAssessmentStore = create<AssessmentState>((set) => ({
  currentScore: 0,
  totalQuestions: 0,
  currentQuestionIndex: 0,
  answers: {},
  setAnswer: (questionIndex, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionIndex]: answer },
    })),
  incrementScore: () =>
    set((state) => ({ currentScore: state.currentScore + 1 })),
  resetAssessment: () =>
    set({
      currentScore: 0,
      totalQuestions: 0,
      currentQuestionIndex: 0,
      answers: {},
    }),
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
}))
