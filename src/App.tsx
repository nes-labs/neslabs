import { useState } from 'react'
import './App.css'
import { Layout } from './components/layout/Layout'
import { HomeSection } from './pages/Home'
import { ProjectsPage } from './pages/Projects'
import { WhyPage } from './pages/Why'
import { ContactPage } from './pages/Contact'

function App() {
  const [page, setPage] = useState("home")

  return (
    <Layout page={page} setPage={setPage}>
      {page === "home" && (
        <HomeSection />
      )}
      {page === "projects" && <ProjectsPage />}
      {page === "why" && <WhyPage />}
      {page === "contact" && <ContactPage />}
    </Layout>
  )
}

export default App
