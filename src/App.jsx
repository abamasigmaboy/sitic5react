import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header/header'
import Page1 from './Home/home'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
