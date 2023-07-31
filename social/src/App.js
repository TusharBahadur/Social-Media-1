import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Logins from './components/Logins'
import Home from './container/Home'

const App = () => {
  return (

    <Routes>
      <Route path='login' element={<Logins />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )


}

export default App
