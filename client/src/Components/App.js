import '../CSS/App.css';
import Login from './Login/Login';
import Home from './Home';
import Watch from './fullScreenPlay/Watch';
import Register from './Register/Register';
import { Routes, Route, Navigate } from "react-router-dom"



function App() {
  const user = false;
  return (
    <Routes>
      <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />
      {/* {user ? <Home /> : <Navigate to="/register" /> } */}
      {/* </Route> */}

      <Route exact path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

      {user &&
        (<>
          <Route exact path='/movies' element={<Home type="movies" />} />
          <Route exact path='/series' element={<Home type="series" />} />
          <Route exact path="/watch" element={<Watch />} />
        </>)}
    </Routes>
  );
}

export default App;
