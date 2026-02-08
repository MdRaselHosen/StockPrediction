import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center'>
                <h1 className='text-dark'>Stock Prediction</h1>
                <p className='text-dark lead'>This stock prediction application utilize machine learning techiniques.</p>
                <Button text='Login' class='btn-outline-primary' />
            </div>
            
            
        </div>
    </>
  )
}

export default Home
