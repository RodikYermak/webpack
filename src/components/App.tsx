import React, { useState } from 'react';
import classes from './App.module.scss';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={classes.value}>{count}</div>
            <button className={classes.button} onClick={() => setCount((prev) => prev + 1)}>
                Add
            </button>
        </>
    );
}
