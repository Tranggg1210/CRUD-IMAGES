import React from 'react'
import Photos from './components/Photos/Photos'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  const userLogin = localStorage.getItem("user-token");
  return (
    <div>
     <Routes>
      {!userLogin && <Route path="/" element={<Navigate to="/login" replace/>} />}
      {userLogin && <Route path="/login" element={<Navigate to="/" replace />} />}
      <Route path="/" element={<Photos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}

export default App