import React, {useState, useEffect, useRef} from 'react'

function UserCard({name, age, email}) {
    return (
        <div className='card'>
            <h2 className='name'>{name}</h2>
            <p className='age'> Возраст: {age} лет</p>
            <p className='email'>Email: {email}</p>
        </div>
    );
}

export default UserCard;