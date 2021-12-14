import React from 'react'
import './MenuItem.scss'
import { useNavigate } from "react-router-dom";

export const MenuItem = ({ title, imageUrl, linkUrl}) => {
    
    const navigate = useNavigate();

    return (
        <div className="menu-item"
        >
            <div className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >

            </div>
            <div className="content back" 
            onClick={() => navigate(`${linkUrl}`)}
            >
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}