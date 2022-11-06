import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../Api/fetchData'
import { Link } from 'react-router-dom'
import Songs from '../components/userComponents/SongIndex'

const SetListShow = ({authData}) => {

  const params = useParams()

  const urlMain = process.env.REACT_APP_URL_MAIN

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(urlMain + '/api/set_lists/' + params.id)
    .then((res) => {
      setData(res)
    })
  }, [params.length])


  const regex = /\d+/g;
  const ownerId =  parseInt(data?.owner?.match(regex)[0])
  const userId = authData.userData?.id
  const userIsOwner = userId === ownerId;

  const {id, name, theme, city} = data

  return (
    <div>

      {
        userIsOwner && (
          <div>
            <Link to={`/song-new/${id}`} className='btn btn-primary'>
                Add song
            </Link>
          </div>
        )
      }

        <div key={id}>
            <p>{name}</p>
            <p>{theme}</p>
            <p>{city}</p>
        </div>

        <Songs data={data}  />


    </div>
  )
}

export default SetListShow
