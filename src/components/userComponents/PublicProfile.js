import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../Api/fetchData'
import InstrumentsContainer from './InstrumentsContainer'
import Button from 'react-bootstrap/Button';

const PublicProfile = () => {
  const params = useParams()

  const initialState = {
    username: "",
    description: "",
    email: "",
    instruments: []
  }

  const [musician, setMusican] = useState(initialState)
  const [apiSubscribe, setApiSubscribe] = useState(true)

  useEffect(() => {

    const urlMain = process.env.REACT_APP_URL_MAIN

    if(apiSubscribe) {
      return(() => {
        fetchData(urlMain + '/api/users/' + params.id)
        .then(res => {
          setMusican(res)
          setApiSubscribe(false)
        })
      })
    }
  })

  console.log(musician)

  const {username, description, email, instruments} = musician

  return (
    <div className='container'>
      <h2>{username}</h2>
      <p>{email}</p>
      <div>
        <p>{description}</p>
      </div>

      <div>
        <InstrumentsContainer instruments={instruments} />
      </div>

      <div className='m-5'>
        <Button>contactez {username}</Button>
      </div>

    </div>
  )
}

export default PublicProfile
