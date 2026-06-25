import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from '../api/todoApi';

export const useTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });
};

export const useAddTodo = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error) => {
            console.error('Ошибка при добавлении:', error);
        },
    });
};

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error) => {
            console.error('Ошибка при удалении:', error);
        },
    });
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error) => {
            console.error('Ошибка при обновлении:', error);
        },
    });
};