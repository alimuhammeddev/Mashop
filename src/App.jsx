import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <section>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp />}/> 
            <Route path='/dashboard' element={<Dashboard />}/> 
          </Routes>
    </section>
  )
}

export default App