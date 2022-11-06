import React, {useState, useEffect} from 'react'
import { fetchData } from '../../Api/fetchData'
import { Link } from 'react-router-dom'

const SongIndex = ({data, userIsOwner}) => {

  const [songs, setSongs] = useState([])

  const urlMain = process.env.REACT_APP_URL_MAIN

  useEffect(() => {
    data?.songs?.forEach((item) => {
      fetchData(urlMain + item)
      .then(res => {
        setSongs(prevState => [...prevState, res])
      })
    })
  }, [data?.songs?.length])

  return (
    <div>
      {
        songs.map(({id, name, creator, interpret}) => {
          return (

            <div key={id}>
            {
              userIsOwner && <Link to={`/instru-new/${id}`}>add instru</Link>
            }
              <p>{name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SongIndex
