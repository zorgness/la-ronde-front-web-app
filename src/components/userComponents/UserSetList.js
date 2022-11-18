import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { fetchData } from '../../Api/fetchData';
import { connect } from 'react-redux'

const UserSetList = ({setListData}) => {

  const [userSetLists, setUserSetList] = useState([])

  // console.log(setListData)

  useEffect(() => {
        const urlMain = process.env.REACT_APP_URL_MAIN

        setUserSetList([])

        return(() => {

          setListData?.forEach(element => {
            fetchData(urlMain + element).then(res => {
              setUserSetList(prev => [...prev, res])

            })
          })
        })

  }, [setListData]);


  const sortedList = userSetLists?.sort((a,b) => b?.id - a?.id)

  return (
    <div>
      <h2>UserSetList</h2>

      <Link to={'/set-list-new'}className='btn btn-primary'>Nouvelle Set list</Link>
      {
        sortedList.map(element => {
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

const mapStateToProps = state => {
  return {
    setListData: state.auth?.userData?.setLists,
  }
}

export default connect(mapStateToProps, null)(UserSetList)
