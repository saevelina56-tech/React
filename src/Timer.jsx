import React, {useState, useRef} from 'react';

function Timer () {
    const [seconds, setSeconds] = useState(0)
    const intervalRef = useRef(null);
    const secondsRef = useRef(0);
    const startTimer = () => {
        if (intervalRef.current !== null) return;
        else {
            intervalRef.current = setInterval(() => {
                secondsRef.current += 1;
                setSeconds(secondsRef.current);
            }, 1000);
        };
    };

    const stopTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    };

    const deleateTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        secondsRef.current = 0;
        setSeconds(0);
    };

    return (
        <div>
            <h2>ЗАдание 1: Секундомер (useRef)</h2>
            <p>Прошло секунд: {seconds}</p>
            <button onClick={startTimer}>Старт</button>
            <button onClick={stopTimer}>Стоп</button>
            <button onClick={deleateTimer}>Сброс</button>
        </div>
    );
}

export default Timer;