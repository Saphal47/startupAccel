import logo from './logo.svg';
import React,{useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [darkmode,setDarkMode] = useState('light');

  const togglemode = () => {
    if(darkmode === 'light'){
       setDarkMode('dark');
       document.body.style.backgroundColor = 'rgb(9 5 72)';
      //  showAlert(" Dark Mode Enabled","Success");
       document.title="TextApp-DarkMode";
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert(" Light Mode Enabled","Success");
      document.title="StartupAccel-Home";
    }
  }

  return (
    <>
    <Navbar mode={darkmode} togglemode={togglemode}/>
    <Textform/>
    </>
  );
}

export default App;
