import React from "react";

const UserList = () => {
    const users = [
        {
            id: 1,
            name: 'Анна Иванова',
            age: 18
        },
        {
            id: 2,
            name: 'Петр Сидоров',
            age: 48
        },
        {
            id: 3,
            name: 'Мария Петрова',
            age: 19
        },
    ]
    return (
        <div>
            <h2>Список пользователей</h2>
            <div>{users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                </div>
            ))}</div>
        </div>
    )
}

export default UserList;