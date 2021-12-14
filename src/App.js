import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import { Routes, Route} from 'react-router-dom';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element = {<HomePage/>}/>
        <Route   path = '/shop' element = {<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
