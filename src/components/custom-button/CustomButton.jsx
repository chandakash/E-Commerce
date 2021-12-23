import React from 'react'
import './CustomButton.scss'

export const CustomButton = ({children,inverted, ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
