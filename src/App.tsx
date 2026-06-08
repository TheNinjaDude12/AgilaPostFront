import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar";
import Scheduling from "./pages/Scheduling";


function App() {
  return (
    <div>
      <Navbar />
      
      <main className="main-content">
        <Scheduling />
      </main>
    </div>
  );
}

export default App

