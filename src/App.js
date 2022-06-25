import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePages';
import News from './pages/News';
import Header from './pages/components/header/Header';

import Footer from './pages/components/footer/Footer';
import './pages/nullstyle.css';
import './App.css'

function App() {
  return (
    <>
    <div className='App'>
    <header className='container'>
    <Header />
   


    </header>
    <footer>
        <Footer />
      </footer>
    </div>

   
    </>
  );
}

export default App;
