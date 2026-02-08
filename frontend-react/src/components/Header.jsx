import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container nav pt-3 pb-3'>
            <a className='navbar-brand text-dark'>Stock Prediction</a>

            <div>
                <Button text='Login' class='btn-outline-primary' />
                &nbsp;
                <Button text='Register' class='btn-primary' />
            </div>
        </nav>
      
    </>
  )
}

export default Header
