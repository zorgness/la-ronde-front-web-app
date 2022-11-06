import React from 'react'


const UserStory = ({userData}) => {


  return (

      <div className='bg-light p-3'>

          <h2 className='text-secondary'>About me</h2>

          <p className=''>{userData?.description}</p>

      </div>
  )
}

export default UserStory
