import React, {useState, useEffect} from 'react'
import Search from './Search'
import { fetchData } from '../Api/fetchData'
import { Link } from 'react-router-dom'

const SetListIndex = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    const urlMain = process.env.REACT_APP_URL_MAIN
    return(() => {

        fetchData(urlMain + '/api/set_lists').then(res => {
          setList(res)
        })

    })

  }, [list.length])

  return (
    <div>
      <h2>Set List</h2>

      <div className='m-3'>
        <Search />
      </div>

      {
        list['hydra:member']?.map(element => {
          return (
            <Link to={`/set-list/${element.id}`} key={element.id} >
              <div className='bg-secondary m-5 text-white'>
                <p>{element.name}</p>
                <p>{element.theme}</p>
                <p>{element.city}</p>
              </div>
            </Link>
          )
        })
      }

    </div>
  )
}

export default SetListIndex
