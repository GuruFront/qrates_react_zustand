import React from 'react'
import NotFoundIcon from '../../assets/NotFoundIcon'
import './style.scss'

import {
Link
} from 'react-router-dom';

const NotFound = () => {
  return <div className='notFoundPage'>
    <div className='notFoundIcon'>
      <NotFoundIcon/>
    </div>
    <div className='notFoundPage__content'>
      <h1>404</h1>
      <h2>UH OH! You`re lost.</h2>
      <p>The page you are looking for does not exist.
        How you got here is a mystery. But you can click the button below
        to go back to the homepage.
      </p>
      <Link to='/' className='notFoundPage__link'>HOME</Link>
    </div>
  </div>
}

export default NotFound