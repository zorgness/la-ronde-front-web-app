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

  }, [list?.length])


  return (
    <div>
      <h2>Set List</h2>

      <div className='m-3'>
        <Search />
      </div>

      <div className='d-flex justify-content-center gap-5 flex-wrap '>
      {
        list?.['hydra:member']?.map(element => {
          return (
            <Link to={`/set-list/${element.id}`} key={element.id} >
              <div className="card-product">
                <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="" />
                <div className="card-product-infos">
                  <h2>{element.name}</h2>
                  <p>{element.theme}</p>
                  <pre>{element.city}</pre>
                </div>
              </div>
            </Link>
          )
        })
      }
      </div>

    </div>
  )
}

export default SetListIndex
