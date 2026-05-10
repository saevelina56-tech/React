import React, {useState } from "react"

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTaskText, setNewTaskText] = useState('')

    const addTask = () => {
        if (newTaskText.trim() === '') {
            alert('Введите текст задачи: ')
            return
        }

        const newTask = {
        id: Date.now(), 
        text: newTaskText,
        completed: false
        }
        
        setTasks([...tasks, newTask])
        setNewTaskText('') 
    }

    const ChangeState = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId
                ? {...task, completed: !task.completed}
                : task
        ))
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const completedCount = tasks.filter(task => task.completed).length
    const totalCount = tasks.length


  return (
    <div className='container'>
        <h1>To Do List</h1>
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
                    <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                        <label className="task-label">
                            <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => ChangeState(task.id)}
                            className="task-checkbox"
                            />
                            <span className="task-text">{task.text}</span>
                        </label>
                        <button 
                            onClick={() => deleteTask(task.id)}
                            className="delete-btn"
                            title="Удалить задачу"
                        >
                        Удалить
                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}

export default TodoList