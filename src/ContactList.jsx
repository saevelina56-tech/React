import React, {memo} from "react";

const ContactItem = ({contact, onDelete}) => {
    return (
        <div>
            <h3>{contact.name}</h3>
            <h4>{contact.phone}</h4>
            <button
                onClick={() => onDelete(contact.id)}
            >
                Удалить
            </button>
        </div>
    )
};

const ContactList = ({contacts, onDeleteContact}) => {
    if (contacts.length === 0) {
        return (
            <p>Нет контактов</p>
        )
    }
    return (
        <div>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDeleteContact}
                />
            ))}
        </div>
    )
}

export default memo(ContactList);