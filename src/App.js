import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import HeadLine from './Components/HeadLine';
import Food from './Components/Food';
import Category from './Components/Category';
import Footer from './Components/Footer';


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <HeadLine/>
    <Food/>
    <Category/>
    <Footer/>
    </>
  );
}

export default App;
