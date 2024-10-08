import React, { Component } from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import Detail from './pages/detail';
import Booking from './pages/booking';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
