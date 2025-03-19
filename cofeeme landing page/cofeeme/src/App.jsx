import { useState } from 'react'
import Hero from './componant/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' overflow-x-hidden'>
      
      <Hero/>
     </div>
    </>
  )
}

export default App
