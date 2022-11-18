import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../Api/fetchData'
import { Link } from 'react-router-dom'
import Songs from './userComponents/Songs'


const SetListShow = ({authData}) => {

  const params = useParams()

  const urlMain = process.env.REACT_APP_URL_MAIN

  const [data, setData] = useState([])

  // const [listInstruments, setListInstruments] = useState([])

  const {id, name, theme, city } = data

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


  return (
    <div>

      {
        !userIsOwner && (
          <div>
            <Link to="" className="btn btn-info" >Join</Link>
          </div>
        )
      }

      {
        userIsOwner && (
          <div>
            <Link to={`/song-new/${id}`} className='btn btn-primary'>
                Add song
            </Link>
          </div>
        )
      }

        <div>
            <p>{name}</p>
            <p>{theme}</p>
            <p>{city}</p>
        </div>



        <Songs data={data} userIsOwner={userIsOwner}  />


    </div>
  )
}

export default SetListShow
