import React, { useState } from 'react';
import { usePosts } from './hooks/usePosts';

function App() {
    const [showAll, setShowAll] = useState(false);
    const { data: posts, isLoading, error, isError } = usePosts();
    
    const displayedPosts = showAll ? posts : posts?.slice(0, 5);


    if (isLoading) {
        return (
            <div>Загрузка...</div>
        )
    }
    if (isError) {
        return (
            <div>Ошибка: {error}</div>
        )
    } 
    return (
        <>
            <h1>Посты</h1>
            <button
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? 'Показать только первые 5' : 'Показать все'}
            </button>
            <div>
                {displayedPosts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;