import React, {memo, useMemo} from 'react';
 
const TodoItem = memo(({ todo, onToggle, onDelete }) => {
    console.log(`Рендер TodoItem: ${todo.text}`);
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <button
                onClick={() => onDelete(todo.id)}
            >
                Удалить
            </button>
        </li>
    );
})

export default TodoItem;