import Logo from '../../assets/Logo'
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import Navigation from '../../components/Navigation/Navigation'

const Main = () => {
    return (
        <div className='mainWrap container'>
            <div className='logo'>
                <Logo/>
            </div>
            <div className='actionContent'>
                <h1 className='actionContent__title'>
                    QRATES
                </h1>
                <p className='actionContent__subTitle'>
                    Music in your hands
                </p>
                <Link to='/about' className='actionContent__action'>Start</Link>
            </div>


            <div className='navigationWrap'>
                <Navigation/>
            </div>
        </div>
    )
}

export default Main