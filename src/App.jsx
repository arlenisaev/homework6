import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Basket from './pages/Basket';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
