import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom' //importaciones de elementos que son de librerias, con llaves.

import { Button } from 'react-bootstrap';

import Home from './views/template/Home'
import Footer from './views/template/Footer'


function App() {
  return (
    <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          {/* <Route path={"/login"} element={<Login />} />*/}
        </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
