import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React,{} from 'react';


function App() {  
  const [darkMode, setDarkMode]= useState(false);// whether dark mode us enabled or not 
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText = "About TextUtils"/> */}
\
      <Navbar title='TextUtils'/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below"/>
     
     
      </div>

       {/* <About/> */}
    </>
  );
}

export default App;
