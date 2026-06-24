import React, { useState, useCallback } from "react";
import TodoItem from './TodoItem'; 
import useTaskStore from "./TaskStore";

function TodoList() {
    const { 
        tasks, 
        addTask, 
        toggleTask, 
        deleteTask,
    } = useTaskStore();
    
    const [newTaskText, setNewTaskText] = useState('');

    const handleAddTask = () => {
        if (newTaskText.trim() === '') {
            alert('Введите текст задачи: ');
            return;
        }
        addTask(newTaskText);
        setNewTaskText('');
    };


    const totalCount = tasks.length;
    const completedCount = tasks.filter(task => task.completed).length;

    return (
        <div className='container'>
            <h2>Задание 2: Список задач (zustand)</h2>
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
                <button onClick={handleAddTask} className="add-btn">Добавить</button>
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
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoList;