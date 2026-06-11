import React, { useState, useMemo, memo, useCallback } from 'react';



function App() {
  // Задание 1
  const [users, setUsers] = useState([
    { id: 1, name: "Алексей" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Иван" },
    { id: 4, name: "Ольга" },
    { id: 5, name: "Дмитрий" },
  ]);

  const [search, setSearch] = useState('')

  const filterUsers = (userList, searchText) => {
    console.log('Вызвана функция фильтрации')
    if (!searchText.trim()) {
      return userList
    } else {
      return userList.filter(user => 
        user.name.toLowerCase().includes(searchText.toLowerCase())
      )
    }
  }

  const filteredUsers = useMemo(() => {
    return filterUsers(users, search)
  }, [users, search])

  // Задание 2
  const TodoItem = memo(({todo, onToggle, onDelete}) => {
    console.log(`Рендер: ${todo.text}`)
    return(
      <li>
        <input 
          type='checkbox'
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)}>Удалить</button>
      </li>
    )
  })

  const [todos, setTodos] = useState([
    { id: 1, text: 'Задача 1', completed: false },
    { id: 2, text: 'Задача 2', completed: false },
    { id: 3, text: 'Задача 3', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('')

  const handleToggle = useCallback((id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const addTodo = () => {
    if (newTodoText.trim()) {  
      const newTodo = {
        id: Date.now(),
        text: newTodoText,  
        completed: false
      }
      setTodos([...todos, newTodo])
      setNewTodoText('') 
    }
  }

  return (
    <>
      {/* Задание 1 */}
      <strong>Поиск пользователей (useMemo)</strong>
      <input 
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder='Введите имя'
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>

      {/* Задание 2 */}
      <div>
        <strong>Список задач (useCallback)</strong>
        <input
          type="text"
          placeholder="Просто поле ввода текста"
          onChange={() => console.log('Ввод не вызывает перерендер задач')}
        />
        <input
          type="text"
          placeholder="Введите новую задачу"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Добавить задачу</button>
        <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;