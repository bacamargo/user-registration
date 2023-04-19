import './Logo.css'
import logo from '../../assets/imgs/Kosmic.png'
import React from 'react'

export default properties =>
    <aside className='Logo'>
        <a href='/' className='logo'>
            <img src={logo} alt='logo' />
        </a>
    </aside>