import React, {useEffect} from 'react'

function UserStatus ({isLoggedIn}) {
    useEffect(() => {
        if (isLoggedIn) {
            console.log('Пользователь вошел в систему');
        } else {
            console.log('Пользователь вышел из системы');
        }
    }, [isLoggedIn]);
    if (isLoggedIn) {
        return (
            <div>
                <h2>Добро пожаловать, пользователь!</h2>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default UserStatus;

