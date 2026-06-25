// Базовый URL для API
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Получение всех задач
export const fetchTodos = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Ошибка загрузки задач');
    }
    return response.json();
};

export const addTodo = async (newTodo) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: newTodo.title,
            completed: false,
            userId: 1,
        }),
    });
    
    if (!response.ok) {
        throw new Error('Ошибка добавления задачи');
    }
    
    const data = await response.json();
    // Возвращаем задачу с id (jsonplaceholder возвращает только id)
    return {
        id: data.id || Date.now(),
        title: newTodo.title,
        completed: false,
    };
};

// Удаление задачи
export const deleteTodo = async (id) => {
    // Имитация задержки
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    
    if (!response.ok) {
        throw new Error('Ошибка удаления задачи');
    }
    
    return id;
};

export const updateTodo = async ({ id, completed }) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
    });
    
    if (!response.ok) {
        throw new Error('Ошибка обновления задачи');
    }
    
    return response.json();
};