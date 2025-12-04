import { ReactNode } from 'react'
import { ChevronLeft, AlertTriangle, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from './ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

interface Section {
  title: string
  content: ReactNode
  keyPoints?: string[]
  pitfalls?: string[]
}

interface LessonPageProps {
  title: string
  icon: string
  description: string
  sections: Section[]
  color: string
}

const LessonPage = ({ title, icon, description, sections, color }: LessonPageProps) => {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-4"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Button>

      {/* Header */}
      <div className="space-y-4">
        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl ${color}`}>
          <span className="text-3xl">{icon}</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {section.content}
              </div>

              {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="font-medium text-sm text-primary">Key Points</p>
                      <ul className="text-sm space-y-1">
                        {section.keyPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {section.pitfalls && section.pitfalls.length > 0 && (
                <div className="mt-4 p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="font-medium text-sm text-amber-500">Common Pitfalls</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        {section.pitfalls.map((pitfall, i) => (
                          <li key={i}>{pitfall}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LessonPage
