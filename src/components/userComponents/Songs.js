import React, {useState, useEffect} from 'react'
import { fetchData } from '../../Api/fetchData'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

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
  }, [data?.songs?.length, urlMain])

   console.log(songs)

  return (
    <div className='m-3'>

      <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Titre</th>
              </tr>
            </thead>
            <tbody>
        {
          songs.map(({id, name, creator}) => {
            return (

              <tr key={id}>
                <td><Link to={`/song/${id}`}>{name} <br/> {creator}</Link> </td>
              </tr>
            )
          })
        }
            </tbody>
      </Table>
    </div>
  )
}

export default SongIndex
