import React from 'react'
import logo from '../static/img/logo.svg'

const Header = () => {
    return (
        <div className="gc-header">
            <img src={logo} className="gc-logo" alt="logo"/>
            <h2>TicTacToe with React & Redux</h2>
        </div>
    )
}

export default Header