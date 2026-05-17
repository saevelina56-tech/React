import React, { useState, useEffect } from 'react';

function DataFetcher({userId}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        console.log(`Монтрирование компонента для User-Id: ${userId}`);
        const fetchPosts = async () => {
            console.log(`Загрузка данных для User-Id: ${userId}`);
            setLoading(true)
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
                );
                const data = await response.json();
                const fivePosts = data.slice(0, 5);
                setPosts(fivePosts);
                console.log(`Данные загружены для User-Id: ${userId}`, fivePosts);
            } catch (error) {
                console.log('Ошибка загрузки: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
        return () => {
            console.log(`Размонтирование для User-iD: ${userId}`);
        };
    }, [userId]);

    useEffect(() => {
        console.log(`Компонент смонтирован для User-iD: ${userId}`);
        
        return () => {
            console.log(`Компонент размонтирован для User-iD: ${userId}`);
        };
    }, []);

    if (loading) {
        return <div>Загрузка постов</div>;
    }

    return (
        <div>
            <h3>
                Посты пользователя {userId}
            </h3>
            <ul style={{ 
                listStyle: 'none', 
            }}>
                {posts.map((post, index) => (
                    <li 
                        key={post.id}
                        style={{
                            borderBottom: '2px solid #eee',
                        }}
                    >
                        {index + 1}. {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DataFetcherContainer() {
    const [isVisible, setIsVisible] = useState(true);
    const [userId, setUserId] = useState(1);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        console.log(`Видимость компонента: ${!isVisible ? 'Показать' : 'Скрыть'}`);
    };

    return (
        <div>
            <h2>
                Жизненный цикл компонента и useEffect
            </h2>
            
            <button
                onClick={toggleVisibility}
                style={{marginBottom: '10px'}}
            >
                {isVisible ? 'Скрыть компонент' : 'Показать компонент'}
            </button>
            
            {isVisible && (
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ marginRight: '10px'}}>
                        Выберите ID пользователя:
                    </label>
                    <select
                        value={userId}
                        onChange={(e) => {
                            setUserId(Number(e.target.value));
                            console.log(`Изменен ID пользователя на: ${e.target.value}`);
                        }}
                        style={{
                            padding: '5px 10px',
                            borderRadius: '4px'
                        }}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            )}
            
            {isVisible && <DataFetcher userId={userId} />}
            
        </div>
    );
}

export default DataFetcherContainer;