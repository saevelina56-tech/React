import React from "react";

const SearchBar = ({searchTerm, onSearch}) => {
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Поиск контакта"
            />
            {searchTerm && (
                <button 
                    onClick={() => onSearch('')}
                >
                    Отменить
                </button>
            )}
        </div>
    )
}

export default SearchBar;