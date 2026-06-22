import React, { useState, Suspense, lazy, useMemo, useReducer } from 'react';
import { ContactReducer, initialState } from './ContactReducer';import ContactList from './ContactList';
import SearchBar from './SearchBar';
import ContactForm from './ContactForm';

const UserList = lazy(() => import('./UserList'));

function App() {
    const [showUsers, setShowUsers] = useState(false);
    const toggleUsers = () => {
        setShowUsers(!showUsers);
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);
    const { contacts, searchTerm, error } = state;

    const filteredContacts = useMemo(() => {
        if (!searchTerm.trim()) return contacts;
        const search = searchTerm.toLowerCase().trim();
        return contacts.filter(c => 
            c.name.toLowerCase().includes(search) ||
            c.phone.toLowerCase().includes(search)
        );
    }, [contacts, searchTerm]);

    const handleAddContact = (name, phone) => {
        if (!name || !phone) {
            dispatch({ type: 'SET_ERROR', payload: 'Заполните все поля' });
            return;
        }
        
        const newContact = {
            id: Date.now(),
            name: name,
            phone: phone,
        };
        dispatch({ type: 'ADD_CONTACT', payload: newContact });
    };

    const handleDeleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };

    const handleSearch = (term) => {
        dispatch({ type: 'SET_SEARCH', payload: term });
    };

    return (
        <>
            <h1>Задание 1: Lazy Loading</h1>
            <button
                onClick={toggleUsers}
            >
                {showUsers ? 'Скрыть' : 'Показать пользователей'}
            </button>
            <div>
                {showUsers ? (
                    <Suspense fallback={
                        <div className="loading-container">
                            <div className="loader"></div>
                            <p className="loading-text">Загрузка списка пользователей...</p>
                        </div>
                    }>
                        <UserList />
                    </Suspense>
                ) : null}
            </div>
            <h1>Задание 2: Контакты</h1>
            <ContactForm 
                onAddContact={handleAddContact}
                error={error}
            />
            <SearchBar 
                searchTerm={searchTerm}
                onSearch={handleSearch}
            />
            <ContactList 
                contacts={filteredContacts}
                onDeleteContact={handleDeleteContact}
            />
        </>
    );
}

export default App;