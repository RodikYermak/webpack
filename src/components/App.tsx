import React, { useState } from 'react';
import classes from './App.module.scss';
import { Outlet, Link } from 'react-router-dom';
import About from '@/pages/about/About';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import CalendarSvg from '@/assets/calendar.svg';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <img width={100} height={100} src={avatarPng} alt="avatar" />
                <img width={100} height={100} src={avatarJpg} alt="avatar" />
            </div>
            <div>
                <CalendarSvg width={50} height={50} />
            </div>
            <Link to="/about">About</Link>
            <br />
            <Link to="/shop">Shop</Link>
            <div className={classes.value}>{count}</div>
            <button className={classes.button} onClick={() => setCount((prev) => prev + 1)}>
                Add
            </button>
            <About />
            <Outlet />
        </>
    );
}
