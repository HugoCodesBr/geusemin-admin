import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { LoginContext } from './context/LoginContext'
import Menu from './components/Menu'

import './App.css'

function App() {
  const {userLogged} = useContext(LoginContext);

  return (
    <div className='App'>
      {userLogged && <Menu />}
      <Outlet />
    </div>
  )
}

export default App
