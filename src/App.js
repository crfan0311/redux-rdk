import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import { Navbar } from './components/Navbar'

function App() {
  const getId = () => {
    const { id } = useParams
    console.log(id)
    return id
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/posts' element={<PostsPage/>} />
        <Route path='/posts/:id' element={<SinglePostPage match={getId}/>} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Router>
  );
}

export default App;
