import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import { Routes, Route} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import { Header } from './components/header/Header';
import { Authentication } from './pages/authentication/Authentication';
import { Contact} from './pages/contact/Contact';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element = {<HomePage/>}/>
        <Route   path = '/shop' element = {<Shop/>}/>
        <Route path= '/signin' element = {<Authentication/>}/>
        <Route path= '/contact' element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
