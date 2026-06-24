import React from "react";

const ProjectList = ({ projects, onSelect, onDelete }) => {
    return (
        <div>
            <h3>Проекты</h3>
            {projects.length === 0 ? (
                <p>Нет проектов</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li
                            key={project.id}
                        >
                            <button
                                onClick={() => onSelect(project.id)}
                            >
                                {project.name}
                            </button>
                            <button onClick={() => onDelete(project.id)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProjectList;