import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './Header.scss'
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.jsx'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'

const Header = ({currentUser, hidden}) => {

    const [header, setHeader] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 10){
            setHeader(true);
        }else{
            setHeader(false);
        }
    }
    window.addEventListener('scroll',changeBackground)

    return (
        <div className={header ? 'header active' : 'header'}>
            <Link to='/' className='logo-container'>
                <CrownLogo className='logo'/>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN-IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
        </div>
    )
};

// const mapStateToProps = ({user : {currentUser}, cart : {hidden}}) => ({
//     // currentUser : state.user.currentUser
//     currentUser,
//     hidden
// })
// const mapStateToProps = (state) => ({
//     currentUser : selectCurrentUser(state),
//     hidden : selectCartHidden(state)
// })
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);