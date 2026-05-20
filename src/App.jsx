import React, { useState } from 'react'
import UserCard from './UserCard'
import ButtonWithCallback from './ButtonWithCallback'

function App() {
  const [name] = useState('John')
  const [age, setAge] = useState(25)
  const [color, setColor] = useState('blue');
  function changeAge() {
    setAge(age+1);
  }

  function changeColor() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }

  function handleClick(message) {
    console.log(message);
  }

  return (
    <>
      <h1>Первое задание</h1>
      <button onClick={changeAge}>Увеличить возраст на 1 год</button>
      <button onClick={changeColor}>Изменить цвет</button>
      <UserCard name={name} age={age} color={color} />
      <h1>Второе задание</h1>
      <ButtonWithCallback onButtonClick={handleClick} />

    </>
  )
}

export default App;
