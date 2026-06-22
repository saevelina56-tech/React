import React, { useState, useRef, useEffect } from 'react';

const ContactForm = ({onAddContact, error}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) {
            return;
        }
        onAddContact(name.trim(), phone.trim());
        setName('');
        setPhone('');
    };

    return (
        <div>
            <h3>Добавить контакт</h3>
            {error && (
                <div>{error}</div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя"
                />
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Телефон"
                />
                <button type="submit">
                    Добавить
                </button>
            </form>
        </div>
    )
}

export default ContactForm;