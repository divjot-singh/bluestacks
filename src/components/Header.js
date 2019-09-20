import React from 'react';

export default function Header(){
    return (
        <header>
            <span className="left-content">
                <img src="https://via.placeholder.com/50x50/000.png/?text=Spotlight" alt="Spotlight" />
                Spotlight<sub>by Bluestacks</sub>
            </span>
            <span className="right-content">
                BETA
                <i className="fa fa-bars"></i>
            </span>
        </header>
    );
}