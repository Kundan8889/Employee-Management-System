import React from 'react'
import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/dashboard';
import {  Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound';
import PostUser from './component/PostUser';

const App = () => {
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
         <Route path="*" element={<NotFound />}/>
          <Route path="/c" element={<PostUser />}/>
      </Routes>
    </>
  )
}

export default App
