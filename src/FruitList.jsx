import React from 'react';

function FruitList({ fruits }) {
    return (
        <div>
            <h2>Список фруктов:</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FruitList;