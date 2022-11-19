import React, {useState, useEffect} from 'react'
import { fetchData } from '../Api/fetchData'
import { Link } from 'react-router-dom'

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
      <div className='m-3'>
        <p>{musician.username}</p>
        <p>{musician.city}</p>
        <ul className="list-group list-group-horizontal">
          {
            instruments.map(({id,name}) => {
              return (
                <li key={id} className="list-group-item">{name}</li>
              )
            })
          }
        </ul>
      </div>
     </Link>
  )
}

export default Musician
