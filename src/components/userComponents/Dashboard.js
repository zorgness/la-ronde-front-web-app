import React from 'react'
import Avatar from '../../images/user-avatar.png'

const Dashboard = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));


  const {username} = userData

  return (
    <div>
        <div className="card-category" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://www.sight-o.io/wp-content/uploads/2020/09/AdobeStock_2025924791-min.jpeg)`}}>
            <div className="d-flex flex-column">

              <div className='mb-4'>
                <img src={Avatar} alt="user-avatar" className='avatar-large' />
              </div>

              {username}

            </div>
        </div>

    </div>
  )

}


export default Dashboard
