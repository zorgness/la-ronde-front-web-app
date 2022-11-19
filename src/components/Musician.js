import React, {useState, useEffect} from 'react'
import { fetchData } from '../Api/fetchData'
import { Link } from 'react-router-dom'
import avatar from './../images/user-avatar.png'

const Musician = ({musician}) => {

  const [instruments, setInstruments] = useState([])
  const [apiSubscribe, setApiSubscribe] = useState(true)

  useEffect(() => {

    const urlMain = process.env.REACT_APP_URL_MAIN

    if(apiSubscribe) {
      return(() => {
        musician?.instruments?.forEach(element => {
          fetchData(urlMain + element)
          .then(res => {
            setInstruments(prev => [...prev, res])
          })
        });
        setApiSubscribe(false)
      })
    }
  }, [musician?.instruments.length])


  return (
    <Link to={`/musician-profile/${musician.id}`}>
      <div className='m-3 card-product'>
      <img src={avatar} alt="" style={{width: "52px", height: '52px'}} className="m-2"/>
        <div className="card-product-infos">
          <h3>{musician.username}</h3>

          <div className="d-flex flex-wrap">
            {
              instruments.map(({id,name}) => {
                return (
                  <pre key={id} className="mx-2 text-dark">{name}</pre>
                )
              })
            }
          </div>
          <p className='text-dark'>{musician.city}</p>
        </div>
      </div>
     </Link>
  )
}

export default Musician
