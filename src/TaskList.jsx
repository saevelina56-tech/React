import React from "react";

const TaskList = ({project, newTask, setNewTask, onAddTask, onDeleteTask, onToggleTask}) => {
    if (!project) {
        return (<p>Выберите проект, чтобы посмотреть задачи</p>)
    }
    return (
        <div>
            <h3>{project.name}</h3>
            <form onSubmit={onAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Введите новую задачу"
                />
                <button type="submit">Добавить задачу</button>
            </form>
            {project.tasks.length === 0 ? (
                <p>Нет задач</p>
            ) : (
                <ul>
                    {project.tasks.map((task) => (
                        <li key={task.id}>
                            <input 
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggleTask(project.id, task.id)}
                            />
                            <span style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                            }}>
                                {task.text}
                            </span>
                            <button onClick={() => onDeleteTask(project.id, task.id)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default TaskList;