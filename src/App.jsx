import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Home from './components/Home';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import QuoteViewer from './QuoteViewer';

function App() {
    const [show, setShow] = useState(true);
    const [activeTab, setActiveTab] = useState('home');
    
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <Home />;
            case 'profile':
                return <Profile />;
            case 'contacts':
                return <Contacts />;
            default:
                return <Home />;
        }
    };
    
    return (
        <>
            <h1>Список цитат</h1>
            <button onClick={() => setShow(!show)}>
                {show ? 'Скрыть' : 'Показать'}
            </button>
            {show && <QuoteViewer />}
            
            <h1>Навигация по вкладкам с ErrorBoundary</h1>
            <div className='buttons'>
                <button onClick={() => setActiveTab('home')}>
                    Главная
                </button>
                <button onClick={() => setActiveTab('profile')}>
                    Профиль
                </button>
                <button onClick={() => setActiveTab('contacts')}>
                    Контакты
                </button>
            </div>
            
            <ErrorBoundary key={activeTab}>
                {renderContent()}
            </ErrorBoundary>
        </>
    );
}

export default App;