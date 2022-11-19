import React, {useState, useEffect} from 'react'
import { fetchData } from './../Api/fetchData'
import Musician from './Musician'
import Search from './Search'

const MusicianIndex = () => {

  const [musicians, setMusicians] = useState([])
  const [apiSubscribe, setApiSubscribe] = useState(true)

  useEffect(() =>{

    const urlMain = process.env.REACT_APP_URL_MAIN

    if(apiSubscribe) {
      return(() => {
        fetchData(urlMain + '/api/users')
        .then(res => {
          setMusicians(res?.["hydra:member"])
          setApiSubscribe(false)
        })
      })
    }

  }, [apiSubscribe])

  console.log(musicians)

  return (
    <div className='container mt-5'>
      <h2 className='mb-5'>Trouver un musicien</h2>

      <Search />

      <div className='d-flex flex-wrap justify-content-around mt-5'>
        {
          musicians.map((musician, index) => {
            return  <Musician key={index} musician={musician} />
          })
        }
      </div>


    </div>
  )
}

export default MusicianIndex