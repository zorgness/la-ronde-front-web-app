import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/authComponents/Login';
import Dashboard from './components/userComponents/Dashboard';
import RegisterContainer from './components/authComponents/RegisterContainer';
import RequireAuth from './components/authComponents/RequireAuth';
import { connect } from 'react-redux';
import { userProfileFetch, userSetId, userLogout } from '../src/redux/actions/actions';

const  App = ({authData, logout, setId, fetchProfile}) =>  {

  const userId = window.localStorage.getItem('userId');

  useEffect(() => {

    if (userId) {
      setId(userId);
      fetchProfile(userId)
    }
  }, [userId, setId, fetchProfile]);

  // useEffect(() => {
  //   if(userId) {
  //     fetchProfile(userId)

  //     if(!localStorage.getItem('user')) {
  //   return(() => {

  //       localStorage.setItem('user', JSON.stringify(authData.userData));

  //   })
  // }

  //   }

  // }, [userId, fetchProfile]);

  return (
    <div className="App">

    <Navigation authData={authData} logout={logout}  />

    <BrowserRouter>
        <ScrollToTop >
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterContainer />} />

            <Route element={<RequireAuth />}>
              <Route path='/dashboard' element={<Dashboard  />} />
            </Route>

          </Routes>
        </ScrollToTop>
      </BrowserRouter>



    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth
  }
};


const mapDispatchToProps = dispatch => {
  return {
    setId: userId => dispatch(userSetId(userId)),
    fetchProfile: userId => dispatch(userProfileFetch(userId)),
    logout: () => dispatch(userLogout())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
