import React, {useState, useEffect} from 'react'
import { fetchData } from '../../Api/fetchData'

const SongIndex = ({data}) => {

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
              <p>{name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SongIndex
