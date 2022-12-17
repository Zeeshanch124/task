import React, { useState, useEffect } from 'react'

export default function Counter() {

    const [count, setCount] = useState<any>(null)

    useEffect(() => {
        if (localStorage.getItem("count")) {
            const x = localStorage.getItem("count");
            const temp_count = x ? parseInt(x) : 0;
            setCount(temp_count);
        } else {
            localStorage.setItem('count', '0');
            window.dispatchEvent(new Event('storage'))
        }

    }, []);

    function increment() {
        if (localStorage.getItem("count")) {
            const x = localStorage.getItem("count");
            const temp_count = x ? parseInt(x) : 0;
            setCount(temp_count + 1);
            localStorage.setItem("count", (temp_count + 1).toString());
            window.dispatchEvent(new Event('storage'));
            console.log("temp_count: ", temp_count + 1);
        }
    }

    function decrement() {
        if (localStorage.getItem("count")) {
            const x = localStorage.getItem("count");
            const temp_count = x ? parseInt(x) : 0;
            setCount(temp_count - 1);
            localStorage.setItem("count", (temp_count - 1).toString());
            window.dispatchEvent(new Event('storage'));
            console.log("temp_count: ", temp_count - 1);
        }
    }


    return (
        <div className='border-2 w-64 py-2 px-2'>
            <h1 className='text-center'>Counter Component</h1>
            <div className='flex justify-between mt-4'>
                <button onClick={increment} className='border-2 w-8 h-8 rounded-lg'>+</button>
                <span>{count}</span>
                <button onClick={decrement} className='border-2 w-8 h-8 rounded-lg'>-</button>
            </div>
        </div>
    )
}
