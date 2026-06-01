import React, { useState, useCallback } from "react";
import TodoItem from './TodoItem'; 

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    const addTask = () => {
        if (newTaskText.trim() === '') {
            alert('Введите текст задачи: ');
            return;
        }

        const newTask = {
            id: Date.now(),
            text: newTaskText,
            completed: false
        };
        
        setTasks([...tasks, newTask]);
        setNewTaskText('');
    };

    const ChangeState = useCallback((taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }, []);

    const deleteTask = useCallback((taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }, []);

    const completedCount = tasks.filter(task => task.completed).length;
    const totalCount = tasks.length;

    return (
        <div className='container'>
            <h2>Задание 2: Список задач (memo)</h2>
            {totalCount > 0 && (
                <div className="counter">Выполнено {completedCount} из {totalCount}</div>
            )}
            <div className="add-task-form">
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Введите новую задачу..."
                    className="task-input"
                />
                <button onClick={addTask} className="add-btn">Добавить</button>
            </div>
            <div className='tasks-list'>
                {tasks.length === 0 ? (
                    <div className='empty-massage'>
                        Нет задач
                    </div>
                ) : (
                    tasks.map(task => (
                        <TodoItem
                            key={task.id}
                            todo={task}
                            onToggle={ChangeState}
                            onDelete={deleteTask}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoList;