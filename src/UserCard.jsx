import React, {useState, useEffect, useRef} from 'react'

function UserCard({name, age, color}) {
    console.log("Ререндер UserCard")
    return (
        <div className='card' style={{backgroundColor: `${color}`}}>
            <h2>Карточка пользователя</h2>
            <h2 className='name'>{name}</h2>
            <p className='age'> Возраст: {age} лет</p>
        </div>
    );
}

export default UserCard;