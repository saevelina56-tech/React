import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserCard from './UserCard';

function Home() {
    return (
      <h1>Это главная страница</h1>
    )
  }
  function AboutUs() {
    return (
      <div>
        <h1>О нас: </h1>
        <p>аывораылоравоалыовалво аооаао аоылдффд</p>
      </div>
    )
  }

  function Contacts() {
    return (
      <div>
        <p>+7 812 7227 91</p>
        <p>+7 812 7347 55</p>
      </div>
    )
  }
  function Navigation() {
    return (
      <nav>
        <Link to = '/'
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
          Главная
        </Link>
        <Link to = '/about'>
          О нас
        </Link>
        <Link to ='/contacts'>
          Контакты
        </Link>
      </nav>
    );
  }
function App() {
  const users = [
        { name: 'Анна Иванова', age: 25, email: 'anna@example.com' },
        { name: 'Пётр Сидоров', age: 32, email: 'petr@example.com' },
        { name: 'Мария Петрова', age: 28, email: 'maria@example.com' },
    ];
  

  return (
    <>
      <h1>Первое задание</h1>
       <h2>Карточки пользователей</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          {users.map(user => (
              <UserCard 
                  name={user.name}
                  age={user.age}
                  email={user.email}
              />
          ))}
        </div>
        <h1>Второе задание</h1>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/contacts' element={<Contacts />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;