import React from 'react'
import './HomePage.scss'

export const HomePage = () => {
    return (
            <div className="homepage">
                <div className="directory-menu">
                    <div className="menu-item">
                     <div className="content hats">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>   
                    </div>
                    <div className="menu-item">
                     <div className="content jackets">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>   
                    </div>
                    <div className="menu-item">
                     <div className="content shoes">
                        <h1 className="title">SHOES</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>   
                    </div>
                    <div className="menu-item">
                     <div className="content mens">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>   
                    </div>
                    <div className="menu-item">
                     <div className="content">
                        <h1 className="title">WOMEN</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>   
                    </div>
                </div>
            </div>
    )
}
