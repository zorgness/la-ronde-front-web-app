import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../Api/fetchData'
import InstrumentsContainer from './InstrumentsContainer'
import Button from 'react-bootstrap/Button';
import avatar from '../../images/user-avatar.png'

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


  const {username, description, instruments, city} = musician

  return (
    <div>
           <div className="card-category" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://img.freepik.com/vecteurs-libre/fond-esthetique-orange-cadre-instrument-musique-dans-vecteur-conception-retro_53876-157650.jpg?w=2000)`}}>
            <div className="d-flex flex-column">

              <div className='mb-4'>
                <img src={avatar} alt="user-avatar" className='avatar-large' />
              </div>

              {username}

            </div>
        </div>

      <div className="container mt-5">

        <div className='text-end'>
          <p>{city}</p>
        </div>

        <div>
            <h3 className='mb-3'>About me</h3>
          <p>{description}</p>
        </div>

        <div>
          <InstrumentsContainer instruments={instruments} />
        </div>

        <div className='m-5'>
          <Button>contactez {username}</Button>
        </div>
      </div>

    </div>
  )
}

export default PublicProfile
