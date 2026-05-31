import React, {useReducer, useState} from 'react';

const initialUsers = [
    { id: 1, name: 'Иван', active: true },
    { id: 2, name: 'Мария', active: false },
    { id: 3, name: 'Алексей', active: true },
];
const userReducer = (state, action) => {
    switch (action.type) {
        case ('CHANGE_NAME'): 
            return state.map(user =>
                user.id === action.payload.id
                ? { ...user, name: action.payload.newName }
                : user
            );
        case ('TOGGLE_ACTIVE'):
            return state.map(user => 
                user.id === action.payload ? {...user, active: !user.active} : user
            );
        case ('DELETE_USER'):
            return state.filter(user => user.id !== action.payload);
        default:
            return state;
    }
}

function ListUsers() {
  const [users, dispatch] = useReducer(userReducer, initialUsers);
  const [changeId, setChangeId] = useState(null);
  const [changeName, setChangeName] = useState('');

  const handleSaveName = () => {
        if (changeName.trim() !== '') {
            dispatch({ type: 'CHANGE_NAME', payload: { id: changeId, newName: changeName } });
            setChangeId(null);
            setChangeName('');
        }
    };


  return (
    <div>
        {users.map(user => (
            <div style = {{backgroundColor: user.active ? 'rgb(255, 38, 0)' : '#4caf50'}} key = {user.id}>
                <strong>Имя: {user.name}</strong>
                <input
                    type="text"
                    placeholder="Новое имя"
                    value={changeId === user.id ? changeName : ''}
                    onChange={(e) => {
                        setChangeId(user.id);
                        setChangeName(e.target.value);
                    }}
                />
                <button
                    onClick={handleSaveName}
                >
                    Сохранить
                </button>
                <button
                    onClick={() => dispatch({ type: 'TOGGLE_ACTIVE', payload: user.id })}
                >
                    {user.active ? 'Сделать неактивным' : 'Сделать активным'}
                </button>
                <button
                    onClick={() => {dispatch({ type: 'DELETE_USER', payload: user.id })}}
                >
                    Удалить
                </button>
            </div>
        ))}
        

    </div>
  )

}
export default ListUsers;