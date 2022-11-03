import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import Navigation from './components/Navigation';
import Home from './components/Home'
import Login from './components/authComponents/Login';
import RegisterContainer from './components/authComponents/RegisterContainer';
import { connect } from 'react-redux'
import { userProfileFetch, userSetId, userLogout } from '../src/redux/actions/actions'

const  App = ({authData, logout, setId, fetchProfile}) =>  {
  return (
    <div className="App">

    <Navigation />

    <BrowserRouter>
        <ScrollToTop >
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterContainer />} />

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
