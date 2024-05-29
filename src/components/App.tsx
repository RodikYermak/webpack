import React, {useState} from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{count}</div>
            <button onClick={()=>setCount(prev=>prev+1)}>Add</button>
        </>
    );
}
