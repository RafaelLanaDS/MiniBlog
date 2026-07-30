import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

//context
import { AuthProvider } from './context/AuthContext'

// Pages
import Home from './pages/Home/Home'
import Abaut from './pages/Abaut/Abaut'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'

// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  const[user, setUser] = useState(undefined)
  const{auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return<p>carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/abaut' element={<Abaut />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/Dashboard' element={<Dashboard/>}/>
                <Route path='/post/create' element={<CreatePost/>}/>
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
