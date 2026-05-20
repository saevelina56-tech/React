import React, {useState} from 'react'

function ButtonWithCallback({onButtonClick}) {
    function handleClick() {
        onButtonClick("Кнопка была нажата!");
    }
    return (
        <button onClick={handleClick}>
            Нажми меня
        </button>
    );
}

export default ButtonWithCallback;