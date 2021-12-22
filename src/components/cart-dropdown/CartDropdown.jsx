import React from 'react'

import { CustomButton } from '../custom-button/CustomButton'
import './CartDropdown.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                <ul>
                    <li>sdkfjlsdjklfsdjafsdjklafasdj</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>

            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
            
        </div>
    )
}

export default CartDropdown;