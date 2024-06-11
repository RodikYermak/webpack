import React, { useState } from 'react';
import classes from './App.module.scss';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Link to="/about">About</Link>
            <br />
            <Link to="/shop">Shop</Link>
            <div className={classes.value}>{count}</div>
            <button className={classes.button} onClick={() => setCount((prev) => prev + 1)}>
                Add
            </button>
            <Outlet />
        </>
    );
}
