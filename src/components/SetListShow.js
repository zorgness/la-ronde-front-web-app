import React, {useState, useEffect, useLayoutEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../Api/fetchData'
import { Link } from 'react-router-dom'
import Songs from '../components/userComponents/SongIndex'

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

  // useEffect(() => {

  //   return(() => {
  //     instruments?.forEach(element => {
  //       fetchData(urlMain + element)
  //       .then(res => {
  //         setListInstruments(prevState => [...prevState, res ])
  //       })
  //     })
  //   })

  // }, [instruments, urlMain])


  const regex = /\d+/g;
  const ownerId =  parseInt(data?.owner?.match(regex)[0])
  const userId = authData.userData?.id
  const userIsOwner = userId === ownerId;





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

        {/* <ul>
          {
            listInstruments?.map(instrument => {
              return (
                <li key={instrument.id}>{instrument.name}</li>
              )
            })
          }
        </ul> */}

        <Songs data={data} userIsOwner={userIsOwner}  />


    </div>
  )
}

export default SetListShow
