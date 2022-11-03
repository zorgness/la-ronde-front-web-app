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
import Register from './components/authComponents/Register';

function App() {
  return (
    <div className="App">

    <Navigation />

    <BrowserRouter>
        <ScrollToTop >
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

          </Routes>
        </ScrollToTop>
      </BrowserRouter>



    </div>
  );
}

export default App;
