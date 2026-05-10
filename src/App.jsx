import './App.css'
import TodoList from './TodoList'

let clickCount = 0

function handleClick() {
    clickCount++
    console.log('Нажатий:', clickCount)
}

function handleInputChange(event) {
    console.log('Введенное имя:', event.target.value)
}

function handleMouseOver() {
    console.log('Мышь наведена!')
}



function App() {
  const name = 'John'
  const prof = 'Translator'
  const desc = 'I am a professional translator specializing in accurate and culturally sensitive translation across multiple language pairs.'
  const emoji = '🤑'

  return (
    <>
      <h2>Первое задание</h2>
      <TodoList />
      <h2>Второе задание</h2>
      <button onClick={handleClick} className="click-button">
          Нажми меня
      </button>
      <p>Количество нажатий смотрите в консоли</p>
      <input
        type='text'
        placeholder='Введите имя'
        onChange={handleInputChange}
      >
      </input>
      <p>Смотрите имя в консоли</p>

      <div 
          className="hover-box highlight"
          onMouseOver={handleMouseOver}
      >
          Наведи на меня
      </div>
      <div className='card'>
        <h1 style={{color: '#2c3e50'}}>{name}</h1>
        <h2 style={{color: '#3498db'}}>{prof}</h2>
        <p>{desc}{emoji}</p>
      </div>
    </>
  )
}

export default App
