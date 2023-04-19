import './Logo.css'
import logo from '../../assets/imgs/Planet.png'
import React from 'react'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>