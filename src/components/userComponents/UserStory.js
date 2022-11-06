import React from 'react'


const UserStory = ({userData}) => {


  return (
    <div>

      <div className='bg-black p-5 mt-5'>

          <h2 className='text-secondary'>About me</h2>

          <p className='text-white'>{userData?.description}</p>

      </div>




    </div>
  )
}

export default UserStory
