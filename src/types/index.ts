export interface Module {
  id: string
  title: string
  description: string
  icon: string
  path: string
  color: string
}

export interface Question {
  id: string
  pattern?: string
  question: string
  options: string[]
  correct: string
  rationale: string
  epidermal_clues?: string[]
  dermal_clues?: string[]
  dif?: string
}

export interface LessonSection {
  id: string
  title: string
  content: string
  diagrams?: string[]
  keyPoints?: string[]
  pitfalls?: string[]
}

export interface InteractiveTool {
  id: string
  name: string
  description: string
  type: 'pattern-finder' | 'melanocytic-classifier' | 'vesiculobullous' | 'dif-simulator'
}

export interface DIFPattern {
  id: string
  pattern: string
  interpretation: string
  clinicalContext?: string
}

export interface IHCMarker {
  id: string
  marker: string
  notes: string
  useCase: string
}
