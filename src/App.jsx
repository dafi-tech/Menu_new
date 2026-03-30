import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MenuPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}
