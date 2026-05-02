import React, { useState } from 'react'

const ColorPick = () => {
    const [color, setColor] = useState('rgb(85, 172, 131)');
    const colors = ['#4c5eaf', 'rgb(172, 65, 193)', 'rgb(183, 217, 71)', '#e5ca8f', 'rgb(62, 227, 213)'];

    return (
        <div style={{
            width: '280px',
            margin: '30px',
            backgroundColor: 'hsl(65, 24%, 89%)',
            padding: '25px',
            borderRadius: '10px'

        }}>

            <h3>Выберите цвет</h3>

            <div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color,
                    borderRadius: '10px',
                    margin: '10px auto',
            }}></div>

            
            <div style={{ 
                display: 'flex', 
                gap: '10px', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                marginTop: '35px'}}>

                {colors.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => setColor(color)}
                        style={{
                            backgroundColor: color,
                            width: '40px',
                            height: '40px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </div>
            <button 
                onClick={() => setColor('rgb(85, 172, 131)')}
                style={{
                    marginTop: '15px',
                    padding: '5px 10px',
                    backgroundColor: 'rgb(85, 172, 131)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Сбросить
            </button>
        </div>
    );
}

export default ColorPick;