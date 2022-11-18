import React, {useState, useEffect} from 'react'
import { fetchData } from '../../Api/fetchData'

const SongInstument = ({instruments}) => {

  const [items, setItems] = useState([])

  useEffect(() => {

    const urlMain = process.env.REACT_APP_URL_MAIN
    return(() => {
      instruments.forEach(element => {
        fetchData(urlMain + element).then(res => {
          setItems(prev => [...prev, res])
        })
      });
    })

  }, [instruments])

  console.log(items)

  return (
    <div>
      {
        items.map(item => {
          return(

            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SongInstument
