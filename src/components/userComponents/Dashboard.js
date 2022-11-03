import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { userProfileFetch, userSetId } from '../../redux/actions/actions';

const Dashboard = ({authData, fetchProfile, setId}) => {

  const userId = window.localStorage.getItem('userId');

  // console.log(authData.userData)

  // useEffect(() => {

  //   if (userId) {
  //     setId(userId);
  //   }
  // }, [userId, setId])

  // useEffect(() => {
  //   if(userId) {
  //     fetchProfile(userId)
  //   }

  // }, [userId, fetchProfile]);


  return (
    <div>Dashboard</div>
  )

  // const {email, username, city} = authData?.userData;

  // return (
  //   <div>

  //   {


  //         <div>

  //         <h2>{email}</h2>

  //         <h2>{username}</h2>

  //         <p>{city}</p>

  //         </div>


  //     }

  //   </div>
  // )
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setId: userId => dispatch(userSetId(userId)),
    fetchProfile: userId => dispatch(userProfileFetch(userId))

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
