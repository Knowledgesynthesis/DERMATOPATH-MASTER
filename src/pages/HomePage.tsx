import ModuleCard from '@/components/ModuleCard'
import { modules } from '@/data/modules'
import { AlertCircle } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 py-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Dermatopath Master
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Pattern-based dermatopathology education for pathology residents
        </p>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-medium text-amber-500 dark:text-amber-400">
            Educational Only
          </p>
          <p className="text-muted-foreground">
            This app is for educational purposes only. Not for diagnosis or patient care.
          </p>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>

      {/* Quick Start Guide */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg space-y-3">
        <h2 className="text-xl font-semibold">How to Use This App</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
          <li>Start with <strong>Foundations</strong> to learn the basic approach to skin biopsies</li>
          <li>Progress through <strong>Inflammatory Patterns</strong> - the core of dermatopathology</li>
          <li>Study <strong>Melanocytic</strong> and <strong>Keratinocytic</strong> lesions</li>
          <li>Learn about <strong>Adnexal</strong> tumors and <strong>Soft Tissue</strong> mimics</li>
          <li>Understand <strong>DIF</strong> and <strong>IHC</strong> patterns conceptually</li>
          <li>Review common <strong>Pitfalls</strong> to avoid diagnostic errors</li>
          <li>Test your knowledge with <strong>Integrated Cases</strong> and <strong>Assessments</strong></li>
        </ol>
      </div>
    </div>
  )
}

export default HomePage
