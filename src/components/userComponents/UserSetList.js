import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { fetchData } from '../../Api/fetchData';

const UserSetList = ({userData}) => {

  const urlMain = process.env.REACT_APP_URL_MAIN

  const [list, setList] = useState([])

  useEffect(() => {

    return(() => {

      userData.setLists.forEach(element => {
        fetchData(urlMain + element).then(res => {
          setList(prevState => [...prevState, res])
        })
      })
    })

  }, [userData.setLists.length])

  return (
    <div>
      <h2>UserSetList</h2>

      <Link to={'/set-list-new'}className='btn btn-primary'>Nouvelle Set list</Link>
      {
        list.map(element => {
          return (
              <Link to={`/set-list/${element.id}`} key={element.id} >
                <div className="bg-dark text-white m-5">
                  <p>{element.name}</p>
                  <p>{element.theme}</p>
                </div>
              </Link>
          )
        })

      }

    </div>
  )
}

export default UserSetList
