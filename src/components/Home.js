import React from 'react'
import Logo from '../images/logo.png'

const Home = () => {
  return (

    <div className='mt-5'>
      <img src={Logo} alt="logo" border="0" className='img-fluid' />

      <figure className='m-3'>
        <blockquote className="blockquote">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  )
}

export default Home
