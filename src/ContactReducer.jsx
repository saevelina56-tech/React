export const initialState = {
    contacts: [
        { id: 1, name: 'John', phone: 'Doe' },
        { id: 2, name: 'Jane', phone: 'Smith' },
        { id: 3, name: 'Bob', phone: 'Johnson' },
    ],
    searchTerm: '',
    error: '',
};

export const ContactReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                error: '',
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload),
                error: '',
            };
        case 'SET_SEARCH':
            return {
                ...state,
                searchTerm: action.payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
