import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';

function App() {
  const userLogin = localStorage.getItem("user-token");
  return (
    <div>
     <Routes>
      {/* {!userLogin && <Route path="/" element={<Navigate to="/login" replace/>} />}
      {userLogin && <Route path="/login" element={<Navigate to="/" replace />} />} */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}

export default App
