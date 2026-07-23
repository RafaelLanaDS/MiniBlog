import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Abaut from './pages/Abaut/Abaut'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/abaut' element={<Abaut />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
