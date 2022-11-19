import React from 'react'
import { importAll } from '../../utils/importAll';

const Instrument = ({instruments}) => {

   const images = importAll(require.context('../../images/instru_images', false, /\.(png|jpe?g|svg)$/));

  return (

    <div className='mx-4'>

      <ul className='list-group'>
        {
          instruments?.map(({id, name}) => {
            return (
                <li key={id} className="list-group-item text-start " style={{border: "none"}}>
                  <img src={images[`${name}.png`]} alt={name} className='avatar-square'/>
                  <span className='mx-5'>{name}</span>
                </li>
             )
          })
        }
      </ul>
    </div>

  )
}

export default Instrument
