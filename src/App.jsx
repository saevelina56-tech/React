import React, { useState } from 'react';
import RandomUser from './RandomUser';
import useCounter from './useCounter';

function App() {
    const [showUser, setShowUser] = useState(false);
     const [count, increment, decrement, reset] = useCounter(0, 1);
    return (
        <>
            <h2>Задание RandomUser</h2>
            <button 
                onClick={() => setShowUser(!showUser)}
            >
                {showUser ? 'Скрыть пользователя' : 'Показать случайного пользователя'}
            </button>
            {showUser && <RandomUser />}

            <h2>useCounter</h2>
            <p>{count}</p>
            <div className='buttons'>
                <button
                onClick={increment}
                >
                    Увеличить
                </button>
                <button
                    onClick={decrement}
                >
                    Уменьшить
                </button>
                <button
                    onClick={reset}
                >
                    Сбросить
                </button>
            </div>
        </>
    );
}

export default App;