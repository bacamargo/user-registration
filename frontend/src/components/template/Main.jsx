import './Main.css'
import React from 'react'
import Header from './Header'

export default properties =>
    <React.Fragment>
        <Header {...properties}/>
        <main className="content">
            Content
        </main>
    </React.Fragment>