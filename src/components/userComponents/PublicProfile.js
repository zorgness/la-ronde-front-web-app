import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../Api/fetchData'
import InstrumentsContainer from './InstrumentsContainer'
import Button from 'react-bootstrap/Button';
import avatar from '../../images/user-avatar.png'
import { Link } from 'react-router-dom'
import arrow from '../../images/arrow.png'

const PublicProfile = () => {
  const params = useParams()

  const initialState = {
    username: "",
    description: "",
    email: "",
    instruments: [],
    setList: []
  }

  const [musician, setMusican] = useState(initialState)
  const [list, setList] = useState([])
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

  const {username, description, instruments, setLists, city} = musician

  useEffect(() => {
    const urlMain = process.env.REACT_APP_URL_MAIN

        setLists?.forEach(element => {
        fetchData(urlMain + element ).then(res => {
          setList(prevState => [...prevState, res])
        })
      })

  }, [setLists?.length])

  console.log(list)

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

        <div>
          <ul className='list-group'>
            {
              list.map(({id,name, theme}) => {
                return <Link key={id} to={`/set-list/${id}`}>
                <li className="text-start list-group-item">
                <img src={arrow} alt="user-avatar" className='avatar mx-2' />
                {name} {theme}</li></Link>
              })
            }
          </ul>
        </div>


      </div>

    </div>
  )
}

export default PublicProfile
