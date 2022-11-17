import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import {Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user =useSelector((state)=>state.authReducer.authData);
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Routes>
          {/* moves us to /home or /auth */}
          <Route 
            path='/' 
            element={user?<Navigate to="home"/>: <Navigate to ="auth"/>}/>
          {/* moves us from /home to cd ../auth if we use Navigate*/}
          <Route 
            path='/home' element={user? <Home/>: <Navigate to="../auth"/>}/>
          <Route 
            path='/auth' element={user? <Navigate to="../home"/>: <Auth/>}/>
          <Route 
            path='/profile/:id' element={user? <Profile/>: <Navigate to="../auth"/>}/>
        </Routes>
    </div>
  );
}

export default App;