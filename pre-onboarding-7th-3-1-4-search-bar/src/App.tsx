import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import DetailPage from './Pages/DetailPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
