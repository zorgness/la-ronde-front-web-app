import { useEffect } from 'react';
import './App.css';
import "bootswatch/dist/zephyr/bootstrap.min.css"
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
import UserSetListForm from './components/userComponents/UserSetListForm'
import RegisterContainer from './components/authComponents/RegisterContainer';
import RequireAuth from './components/authComponents/RequireAuth';
import { connect } from 'react-redux';
import { userProfileFetch, userSetId, userLogout } from '../src/redux/actions/actions';
import SetListIndex from './components/SetListIndex';
import SetListShow from './components/SetListShow';
import SongForm from './components/userComponents/SongForm';
import InstruForm from './components/userComponents/InstruForm';
import SongShow from './components/SongShow';

const  App = ({authData, logout, setId, fetchProfile}) =>  {

  const userId = window.localStorage.getItem('userId');

  useEffect(() => {

    if (userId) {
      setId(userId);
      fetchProfile(userId)
    }
  }, [userId, setId, fetchProfile]);


  return (
    <div className="App">

    <Navigation authData={authData} logout={logout}  />

    <BrowserRouter>
        <ScrollToTop >
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/set-list-index" element={<SetListIndex />} />
            <Route path="/set-list/:id" element={<SetListShow authData={authData}   />} />


            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterContainer isEdit={false} />} />

            <Route element={<RequireAuth />}>
              <Route path='/dashboard' element={<Dashboard  />} />
              <Route path='/set-list-new' element={<UserSetListForm  />} />
              <Route path='/song-new/:id' element={<SongForm  />} />
              <Route path='/instru-new/:id' element={<InstruForm />} />
              <Route path="/song/:id" element={<SongShow authData={authData}   />} />
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
