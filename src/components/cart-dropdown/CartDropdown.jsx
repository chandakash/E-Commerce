import React from 'react'

import { CustomButton } from '../custom-button/CustomButton'
import './CartDropdown.scss'
import {connect} from 'react-redux'
import CartItem from '../cart-item/CartItem'
import {selectCartItems} from '../../redux/cart/cartSelectors'
const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
            
        </div>
    )
}

// const mapStateToProps = ({cart : {cartItems}}) => ({
//     cartItems
// })
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps,null)(CartDropdown);