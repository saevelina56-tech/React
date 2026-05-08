import './App.css'


function App() {
  const name = 'John'
  const prof = 'Translator'
  const desc = 'I am a professional translator specializing in accurate and culturally sensitive translation across multiple language pairs.'
  const emoji = '🤑'

  // const style {
  //   color: 'white',

  // }

  return (
    <>
      <div className='card'>
        <h1 style={{color: '#2c3e50'}}>{name}</h1>
        <h2 style={{color: '#3498db'}}>{prof}</h2>
        <p>{desc}{emoji}</p>
      </div>
    </>
  )
}

export default App
