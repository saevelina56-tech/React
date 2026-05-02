import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Boots1 from './assets/boots1.png'
import Boots2 from './assets/boots2.webp'
import './App.css'
import Card from './Card'
import Header from './Header'
import ClickExample from './Clicker'
import ColorPick from './Color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorPick />
      <Header />
      <ClickExample />
      <Card name={"Кроссовки белые"} image={Boots1} price={20000} count={5000}/>
      <Card name={"Наименование крассные"} image={Boots2} price={30000}/>

    </>
  )
}

export default App
