import logo from './logo.svg';
import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Doc from './pages/Doc';
import Book from './components/Book';
import { ThemeContext } from "./ThemeContext";
import { useState, useEffect } from "react";



function App() {
  // console.log(books[0])
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : false
  );
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  });
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  }


  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }} >
      <Router>
        <Navbar />
        <main className={darkMode ? "body-dark" : "body-light"}>
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            {/* <Route path="/book/:bookSlug" element={<Book />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Doc />} >
              <Route
                path="/works/:bookSlug"
                element={<Book />}
              />
            </Route>
          </Routes>
        </main>
      </Router>
    </ThemeContext.Provider>
   
  );
}

export default App;
