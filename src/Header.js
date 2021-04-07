import React from 'react'

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="header__title">React by Kevin Ortega</h1>
            <div className="header__container-button">
                <div className="header__button" onClick={e => props.setMainClass(0)}>What is?</div>
                <div className="header__button" onClick={e => props.setMainClass(1)}>What do?</div>
                <div className="header__button" onClick={e => props.setMainClass(2)}>Guide</div>
            </div>
        </header>
    )
}

export default Header;