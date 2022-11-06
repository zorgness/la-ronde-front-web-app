import React from 'react'
import {Link} from 'react-router-dom'

const UserSetList = () => {

  return (
    <div>
      <h2>UserSetList</h2>

      <Link to={'/newUserSetList'}className='btn btn-primary'>Nouvelle Set list</Link>

    </div>
  )
}

export default UserSetList
