import { useState } from 'react'
import {BrowserRouter, Routes, Route}
from "react-router-dom"; 
import Video from './componante/Video';
import Home from './componante/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline bg-red-600">my name is asif ahmad</h1>
    </>
  )
}

export default App
