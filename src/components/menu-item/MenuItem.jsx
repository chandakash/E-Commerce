import React from 'react'
import './MenuItem.scss'

export const MenuItem = ({ title, imageUrl }) => {

    return (
        <div className="menu-item">
            <div className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >

            </div>
            <div className="content back">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>

    )
}
