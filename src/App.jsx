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
    <div>
      <div>
        <header>
          {/* Menu for Desktop */}
          <div>
            <nav>
              <ul>
                <li >Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          {/* Menu for mobile */}
          <div>
            <button>&#9776;</button>
            {menuOpen && (
              <nav>
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
          <div>
            <div>
              <div/>
            </div>
          </div>
        </header>
        {/* About Me Part */}
        <main>
          {/*Image*/}
          <div>
            <img src='https://via.placeholder.com/300' alt='My Image Here' />
          </div>
          {/*Text*/}
          <div>
            <p>About US</p>
            <p>A group of wonderful girls, who are smart and intelligent, and are ready to take on the world.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
