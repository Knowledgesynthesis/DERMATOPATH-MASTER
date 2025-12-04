import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useThemeStore } from './stores/themeStore'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FoundationsPage from './pages/FoundationsPage'
import InflammatoryPage from './pages/InflammatoryPage'
import MelanocyticPage from './pages/MelanocyticPage'
import KeratinocyticPage from './pages/KeratinocyticPage'
import AdnexalPage from './pages/AdnexalPage'
import SoftTissuePage from './pages/SoftTissuePage'
import DIFPage from './pages/DIFPage'
import IHCPage from './pages/IHCPage'
import PitfallsPage from './pages/PitfallsPage'
import CasesPage from './pages/CasesPage'
import AssessmentPage from './pages/AssessmentPage'
import SettingsPage from './pages/SettingsPage'
import { useEffect } from 'react'

function App() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    // Apply dark mode class to document root
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="foundations" element={<FoundationsPage />} />
          <Route path="inflammatory" element={<InflammatoryPage />} />
          <Route path="melanocytic" element={<MelanocyticPage />} />
          <Route path="keratinocytic" element={<KeratinocyticPage />} />
          <Route path="adnexal" element={<AdnexalPage />} />
          <Route path="soft-tissue" element={<SoftTissuePage />} />
          <Route path="dif" element={<DIFPage />} />
          <Route path="ihc" element={<IHCPage />} />
          <Route path="pitfalls" element={<PitfallsPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="assessment" element={<AssessmentPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
