import React, {useState} from 'react'
import Instrument from './Instrument'
import UserStory from './UserStory'
import Button from 'react-bootstrap/Button';
import ModalDescription from './ModalDescription'

const Profile = ({userData, userInstrus}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

      <div>
        <p className='text-end mx-3'>{userData.city}</p>
        <h3 className='text-start mx-5'>Mes Instruments</h3>

        <div>

          <Instrument instruments={userInstrus}/>
          <UserStory userData={userData} />

        </div>

        {
          !userData.hasOwnProperty('description')
           &&
          <Button className='btn btn-primary' onClick={handleShow} >Ajouter votre description</Button>
        }

        <ModalDescription
         userId={userData['@id']}
         handleClose={handleClose}
         show={show}
          />

      </div>
  )
}

export default Profile
