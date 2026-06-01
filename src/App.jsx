import React, { useState, useRef } from 'react';
import Timer from './Timer'
import TodoList from './TodoList';


function App() {
  return (
    <>
      <Timer />
      <TodoList />
    </>
  )
}

export default App;