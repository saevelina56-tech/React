import { create } from 'zustand';

const useTaskStore = create((set) => ({
    tasks: [],

    addTask: (text) => {
        if (!text.trim()) return;
        
        set((state) => ({
            tasks: [
                ...state.tasks,
                {
                    id: Date.now(),
                    text: text.trim(),
                    completed: false,
                },
            ],
        }));
    },

    toggleTask: (id) => {
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            ),
        }));
    },

    deleteTask: (id) => {
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        }));
    },

}));

export default useTaskStore;