import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './Header.scss'

export const Header = () => {

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
                <Link className='option' to='/signin'>SIGN-IN</Link>
            </div>
        </div>
    )
}
