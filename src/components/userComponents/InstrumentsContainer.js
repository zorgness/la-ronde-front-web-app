import React, {useState, useEffect} from 'react'
import Instrument from './Instrument'
import { fetchData } from '../../Api/fetchData'

const InstrumentsContainer = ({instruments}) => {
  const [list, setList] = useState([])
  const [apiSubscribe, setApiSubscribe] = useState(true)

  useEffect(() => {

    const urlMain = process.env.REACT_APP_URL_MAIN

      if(apiSubscribe) {

          instruments.forEach(instruPath => {
            fetchData(urlMain + instruPath).then(res => {
              setList(prevState => [...prevState, res])

            })
            setApiSubscribe(false)
        })
      }


  }, [instruments.length, apiSubscribe])

  return (
    <>
      <Instrument instruments={list} />
    </>
  )
}

export default InstrumentsContainer
