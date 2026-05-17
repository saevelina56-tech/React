import React, {useEffect,useState,useLayoutEffect, useRef} from 'react'

function ResizableBoxUseEffect () {
    const [size,setSize] = useState(100);
    const boxRef = useRef(null);

    useEffect(()=>{
        console.log('[useEffect] начало выполнения')
        const box = boxRef.current;
        if (box) {
            const {width, height} = box.getBoundingClientRect();
            console.log('[useEffect] размеры box: ', {width, height});
        }
        console.log('[useEffect] конец выплнения')
    },[size]);

    useEffect(() => {
        console.log('[useEffect] Подписка на событие resize');
        const handleResize = () => {
            console.log('[useEffect] Сработало событие resize');
            if (boxRef.current) {
                const { width, height } = boxRef.current.getBoundingClientRect();
                console.log('[useEffect] размеры box после resize: ', {width, height});
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <div style={{ border: '2px solid red', padding: '10px', marginBottom: '20px' }}>
        <h3>
            Пример UseEffect
        </h3>
        <p>Ширина: {size}px, Высота: {size}px</p>
        <div 
            ref={boxRef}
            style={{
                width: size,
                height: size,
                transition: 'all 0.3s',
                margin: '10px',
                backgroundColor: 'red'
            }}
        >
        </div>
        <button onClick={() => setSize(size + 20)}>
            Увеличить на 20px
        </button>
    </div>
    );
}

function ResizableBoxLayoutEffectComponent () {
    const [size,setSize] = useState(100);
    const boxRef = useRef(null);

    useLayoutEffect(()=>{
        console.log('[useLayoutEffect] начало выполнения')
        const box = boxRef.current;
        if (box) {
            const {width, height} = box.getBoundingClientRect();
            console.log('[useLayoutEffect] размеры box: ', {width, height});
        }
        console.log('[useLayoutEffect] конец выполнения')
    },[size]);

    useLayoutEffect(() => {
        console.log('[useLayoutEffect] Подписка на событие resize');
        const handleResize = () => {
            console.log('[useEffect] Сработало событие resize');
            if (boxRef.current) {
                const { width, height } = boxRef.current.getBoundingClientRect();
                console.log('[useEffect] размеры box после resize: ', {width, height});
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <div style={{ border: '2px solid green', padding: '10px' }}>
        <h3>
            Пример UseLayoutEffect
        </h3>
        <p>Ширина: {size}px, Высота: {size}px</p>
        <div 
            ref={boxRef}
            style={{
                width: size,
                height: size,
                transition: 'all 0.3s',
                margin: '10px',
                backgroundColor: 'green'
            }}
        >
        </div>
        <button onClick={() => setSize(size + 20)}>
            Увеличить на 20px
        </button>
    </div>
    );
}

export default function ExampleOfLayoutAndSimpleEffect() {
    return (
        <div
            style={{
                padding: '20px',
            }}>
            <ResizableBoxUseEffect />
            <ResizableBoxLayoutEffectComponent />
        </div>
    )
};