import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//context
import {authProvider} from './context/AuthContext'

// Pages
import Home from './pages/Home/Home'
import Abaut from './pages/Abaut/Abaut'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <authProvider>
        <BrowserRouter>
          <NavBar />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/abaut' element={<Abaut />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register/>} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </authProvider>
    </div>
  )
}

export default App
