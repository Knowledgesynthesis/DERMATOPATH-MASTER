import { ChevronLeft, Moon, Sun, Info, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { useThemeStore } from '@/stores/themeStore'

const SettingsPage = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useThemeStore()

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

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Customize your learning experience
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Choose your preferred color theme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <p className="font-medium">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Currently using {theme} theme
                </p>
              </div>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              Toggle Theme
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-primary" />
            <CardTitle>About Dermatopath Master</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm">
            <p>
              <strong>Dermatopath Master</strong> is a mobile-first, educational platform designed
              to teach pattern-based dermatopathology to pathology residents and fellows.
            </p>

            <div className="space-y-2">
              <p className="font-semibold">Key Features:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Comprehensive coverage of inflammatory, melanocytic, and keratinocytic patterns</li>
                <li>Conceptual DIF and IHC frameworks</li>
                <li>Common pitfalls and diagnostic challenges</li>
                <li>Integrated case-based learning</li>
                <li>Self-assessment tools</li>
                <li>Offline-ready progressive web app</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Educational Approach:</p>
              <p className="text-muted-foreground">
                This app follows the pattern-based diagnostic algorithm used in dermatopathology
                training programs. Content is organized to mirror the resident learning experience
                during a dermatopathology rotation.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Version:</p>
              <p className="text-muted-foreground">1.0.0</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-amber-500/20">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <CardTitle>Important Disclaimers</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4 text-sm">
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg space-y-2">
              <p className="font-semibold text-amber-600 dark:text-amber-400">
                Educational Use Only
              </p>
              <p className="text-muted-foreground">
                This application is designed exclusively for educational purposes. It is intended
                to help pathology residents and fellows learn pattern-based dermatopathology concepts.
              </p>
            </div>

            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg space-y-2">
              <p className="font-semibold text-red-600 dark:text-red-400">
                Not for Clinical Diagnosis
              </p>
              <p className="text-muted-foreground">
                This app is <strong>NOT</strong> intended for use in actual patient care or clinical
                diagnosis. All cases, scenarios, and images are synthetic and conceptual. Never use
                this app to make clinical decisions or diagnoses.
              </p>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg space-y-2">
              <p className="font-semibold text-blue-600 dark:text-blue-400">
                No PHI or Patient Data
              </p>
              <p className="text-muted-foreground">
                All content is synthetic and educational. No patient health information (PHI) or
                real patient data is used. All cases and examples are created for educational purposes.
              </p>
            </div>

            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg space-y-2">
              <p className="font-semibold text-purple-600 dark:text-purple-400">
                No Data Tracking
              </p>
              <p className="text-muted-foreground">
                This app does not track, store, or export user data. Assessment scores and progress
                are session-only and are not saved. No personal information is collected.
              </p>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg space-y-2">
              <p className="font-semibold text-green-600 dark:text-green-400">
                Conceptual Content
              </p>
              <p className="text-muted-foreground">
                All special stains, IHC patterns, and DIF interpretations are presented conceptually
                for educational understanding. This app does not provide laboratory methodology,
                diagnostic criteria for clinical use, or treatment recommendations.
              </p>
            </div>

            <div className="p-4 bg-gray-500/10 border border-gray-500/20 rounded-lg space-y-2">
              <p className="font-semibold">
                Supervision Required
              </p>
              <p className="text-muted-foreground">
                Pathology residents and fellows should use this app as a supplement to supervised
                training under qualified dermatopathologists and general pathologists. This app
                does not replace hands-on microscopy, attending supervision, or formal medical education.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg space-y-2">
              <p className="font-semibold">
                Accuracy Disclaimer
              </p>
              <p className="text-muted-foreground">
                While every effort has been made to ensure accuracy of educational content, this
                app should not be considered a definitive reference. Always consult standard
                textbooks, peer-reviewed literature, and expert consultation for authoritative
                information.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg space-y-2">
              <p className="font-semibold">
                Limitation of Liability
              </p>
              <p className="text-muted-foreground">
                The creators of this app assume no liability for any errors, omissions, or consequences
                arising from the use of this educational tool. Users accept full responsibility for
                their own learning and clinical practice.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Notice */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              This application is designed with privacy in mind:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>No user accounts or authentication required</li>
              <li>No personal data collected or stored</li>
              <li>No analytics or tracking cookies</li>
              <li>All data processing happens locally on your device</li>
              <li>Assessment scores are session-only (cleared when you close the app)</li>
              <li>Offline-capable through service workers for convenience</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SettingsPage
