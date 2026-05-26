import React, { useState } from 'react'
import UserStatus from './UserStatus'
import FruitList from './FruitList';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLoginStatus = () => {
    setIsLoggedIn(prevStatus => !prevStatus);
  };

  const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Киви', 'Виноград']
  return (
    <>
       <UserStatus isLoggedIn={isLoggedIn} />
       <div>
          <button
            onClick={toggleLoginStatus}
          >
            {isLoggedIn ? 'Выйти' : 'Войти'}
          </button>
       </div>
       <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Домашнее задание: Рендеринг списков</h2>
        <FruitList fruits={fruits} />
       </div>
    </>
  )
}

export default App;