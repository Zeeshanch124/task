import React, { useEffect, useState } from 'react'

export default function Divider() {
    const [result, setResult] = useState<any>(0);
    const [value, setValue] = useState<any>();

    useEffect(() => {
        const handleStorage = () => {
            if (localStorage.getItem("count")) {
                const x = localStorage.getItem("count");
                const temp_count = x ? parseInt(x) : 0;
                setResult(21 / temp_count);
                setValue(x);
            }
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, []);


    return (
        <div className='border-2 w-64 pt-2'>
            <h1 className='text-center'>Divider Component</h1>
            <span className='mt-4 flex justify-center'>21/{value}</span>
            <div className='flex justify-end '>
                <span className='border-t-2 border-l-2 px-2 rounded-tl-lg'>{result}</span>
            </div>
        </div>
    )
}
