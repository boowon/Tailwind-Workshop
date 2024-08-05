import React, { useState } from 'react'; 
 
function App() { 
  const [darkMode, setDarkMode] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 
 
  const switcher = () => { 
    setDarkMode(!darkMode); 
  }; 
 
  const toggleMenu = () => { 
    setMenuOpen(!menuOpen); 
  }; 
 
  return ( 
    <div className={`${darkMode ? 'dark' : ''}`}> 
      <div className={`w-screen min-h-screen dark:text-white text-black dark:bg-gray-900 bg-white flex flex-col items-center pt-2 px-4`}> 
        <header className='w-screen flex'> 
          {/* Menu for Desktop */} 
          <div className='hidden md:flex fixed top-2 left-2'> 
            <nav> 
              <ul className='flex gap-4 cursor-pointer'> 
                <li >Home</li> 
                <li>About</li> 
                <li>Services</li> 
                <li>Portfolio</li> 
                <li>Contact</li> 
              </ul> 
            </nav> 
          </div> 
          {/* Menu for mobile */} 
          <div className='block md:hidden'> 
            <button onClick={toggleMenu} className='cursor-pointer'>&#9776;</button> 
            {menuOpen && ( 
              <nav className='h-screen w-screen flex justify-evenly content-center'> 
                <ul> 
                  <li>Home</li> 
                  <li>About</li> 
                  <li>Services</li> 
                  <li>Portfolio</li> 
                  <li>Contact</li> 
                </ul> 
              </nav> 
            )} 
          </div> 
          {/* Switcher drak-light */} 
          <div className={`flex items-center cursor-pointer fixed top-2 right-2`} onClick={switcher}> 
            <div className={`relative flex items-center h-8 w-16 bg-gray-400 rounded-full bg-gray-600 dark:bg-gray-300 transition-colors duration-300`}> 
              <div className={`absolute h-7 w-7 bg-white rounded-full shadow-md transition-transform duration-300 dark:translate-x-8 translate-x-0`}/> 
            </div> 
          </div> 
        </header> 
        {/* About Me Part */} 
        <main className='flex flex-col justify-center items-center rounded-md shadow-lg w-3/4 md:w-1/4 p-5 mt-20 dark:bg-slate-800 bg-slate-200'> 
          {/*Image*/} 
          <div> 
            <img src='https://via.placeholder.com/300' alt='My Image Here' /> 
          </div> 
          {/*Text*/} 
          <div className='flex flex-col justify-center items-center'> 
            <p className='py-3 text-2xl font-bold font-mono '>About US</p> 
            <p>A group of wonderful girls, who are smart and intelligent, and are ready to take on the world.</p> 
          </div> 
        </main> 
      </div> 
    </div> 
  ); 
} 
 
export default App;