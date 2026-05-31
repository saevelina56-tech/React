import React, { useState } from 'react';
import ListUsers from './ListUsers'
import {AuthProvider, useAuth} from './Authorise'

function UserPanel () {
  const { user, login, logout } = useAuth();
  const [inputName, setInputName] = useState('');

  const handleLogin = () => {
      if (inputName.trim()) {
          login(inputName);
          setInputName('');
      }
  };
  if (user) {
    return (
      <div>
        <h2>Панель пользовтеля</h2>
        <p>Привет, {user.name}</p>
        <button
          onClick={logout}
          >
          Выйти
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Панель пользовтеля</h2>
        <p>Введите имя: </p>
        <input 
          type='text'
          placeholder='Введите имя'
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button
          onClick={handleLogin}
        >
          Войти
        </button>
      </div>
    )
  }
}

function App() {

  return (
    <>
      <h2>Задание 1: Список пользователей (useReducer)</h2>
      <ListUsers />

      <h2>Задание 2: Авторизация (useContext)</h2>
      <AuthProvider>
        <UserPanel />
      </AuthProvider>
    </>
  )
}

export default App;