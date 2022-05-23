import React from "react";
import iconeMoeda from '../assets/iconeMoeda.png'

import style from './Header.module.scss'

export default function Header() {

    return (
        <header className={style.headerApp}>
            <div>
                <img src={iconeMoeda} />
                <h1>Sass Bank</h1>
            </div>
        </header>
    )
}