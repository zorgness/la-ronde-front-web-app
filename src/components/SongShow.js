import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from './../Api/fetchData'
import YoutubeEmbed from '../utils/YoutubeEmbed'
import SongInstument from '../components/userComponents/SongInstument'
import ModalInstru from '../components/userComponents/ModalInstru'


const SongShow = () => {

  const params = useParams()

  const initialState = {
    name: "",
    creator: "",
    link: "",
    interpret: "",
    tone: "",
    tempo: "",
    instruments: []
  }

  const userId = localStorage.getItem('userId')

  const [data, setData] = useState(initialState)

  const [apiSubscribe, setApiSubscribe] = useState(true)

  useEffect(() =>{

    if(apiSubscribe) {
      return(() => {
        const urlMain = process.env.REACT_APP_URL_MAIN
        fetchData(urlMain + `/api/songs/${params.id}`)
        .then(res => {
          setData(res)
          setApiSubscribe(false)
        })
      })

    }

  }, [data, params.id, apiSubscribe])

  console.log(data)

  const {id, name, creator, link, interpret, tone, tempo, instruments } = data

  return (

    <div className='container mt-5'>

      <h1>{name}</h1>
      <pre>{creator}</pre>

      <h6>Version: {interpret}</h6>

      <p>{tone}</p>
      <p>{tempo} bpm</p>

      <div>
        <ModalInstru songId={id} />
      </div>

      <div className='m-5'><YoutubeEmbed embedId={link.split('=')[1]}  /></div>

      <SongInstument instruments={instruments} />
    </div>
  )
}

export default SongShow
