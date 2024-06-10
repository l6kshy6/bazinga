import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./assets/logo.png";
import sound from "./assets/bazinga.mp3";
import sheldon from "./assets/sheldon.webp";

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    const sfx = new Audio(sound);
    sfx.play();
    setCount(count+1);
  }

  return (
    <>
      <div>
      <img src={logo} id="button" onClick={clickHandler}/>
      <h1>BAZINGA COUNT: {count}</h1>
      </div>
      <img src={sheldon} id="sheldon"/>
    </>
  )
}

export default App
