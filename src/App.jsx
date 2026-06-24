import React, { useState } from 'react';
import { produce } from 'immer';
import ProjectList from './ProjectList';
import TaskList from './TaskList';
import TodoList from './components/todo/TodoList';

function App() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Проект 1',
            tasks: [
                { id: 1, text: 'Написать код', completed: false },
                { id: 2, text: 'Сделать дизайн', completed: true },
            ],
        },
        {
            id: 2,
            name: 'Проект 2',
            tasks: [
                { id: 3, text: 'Настроить API', completed: false },
            ],
        },
    ]);

    const [newProjectName, setNewProjectName] = useState('');
    const [newTaskText, setNewTaskText] = useState('');
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const addProject = (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;

    setProjects(produce(draft => {
        draft.push({
            id: Date.now(),
            name: newProjectName.trim(),
            tasks: [],
        });
    }));

        setNewProjectName('');
    };

    const deleteProject = (projectId) => {
        setProjects(produce(draft => {
            const index = draft.findIndex(p => p.id === projectId);
            if (index !== -1) draft.splice(index, 1);
        }));

        if (selectedProjectId === projectId) {
            setSelectedProjectId(null);
        }
    };

    const addTask = (e) => {
        e.preventDefault();
        if (!newTaskText.trim() || !selectedProjectId) return;

        setProjects(produce(draft => {
            const project = draft.find(p => p.id === selectedProjectId);
            project?.tasks.push({
                id: Date.now(),
                text: newTaskText.trim(),
                completed: false,
            });
        }));

        setNewTaskText('');
    };

    const toggleTask = (projectId, taskId) => {
        setProjects(produce(draft => {
            const project = draft.find(p => p.id === projectId);
            const task = project?.tasks.find(t => t.id === taskId);
            if (task) task.completed = !task.completed;
        }));
    };

    const deleteTask = (projectId, taskId) => {
        setProjects(produce(draft => {
            const project = draft.find(p => p.id === projectId);
            if (project) {
                const index = project.tasks.findIndex(t => t.id === taskId);
                if (index !== -1) project.tasks.splice(index, 1);
            }
        }));
    };

    const selectedProject = projects.find(p => p.id === selectedProjectId);
    return (
        <>
            <div>
                <h2>Управление проектами (Immer)</h2>

                <form onSubmit={addProject}>
                    <input
                        type="text"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        placeholder="Название проекта"
                    />
                    <button type="submit">Добавить проект</button>
                </form>

                <div>
                    <ProjectList
                        projects={projects}
                        selectedId={selectedProjectId}
                        onSelect={setSelectedProjectId}
                        onDelete={deleteProject}
                    />

                    <TaskList
                        project={selectedProject}
                        newTask={newTaskText}
                        setNewTask={setNewTaskText}
                        onAddTask={addTask}
                        onToggleTask={toggleTask}
                        onDeleteTask={deleteTask}
                    />
                </div>
            </div>
            <TodoList />
        </>
    );
}

export default App;