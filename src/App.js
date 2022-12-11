import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css"
import Dashboard from './component/Dashboard';
import SignIn from './component/SignIn';
import Register from './component/Register';
import User from './component/User';
import CreateUser from './component/CreateUser';
import Edituser from './component/Edituser';
import Deleteuser from './component/DeleteUser';
import UserprofileList from './component/Userprofile';
import Viewprofile from './component/Viewprofile';
import Createprofile from './component/Createprofile';
import Editprofile from './component/Editprofile';
import Deleteprofile from './component/DeleteProfile';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<SignIn/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/user" element={<User/>}/>
  <Route path="/createuser" element={<CreateUser/>}/>
  <Route path="/edit-user/:id" element={<Edituser/>}/>
  <Route path='delete-user/:id' element={<Deleteuser/>}/>
  <Route path="/userprofile" element={<UserprofileList/>}/>
  <Route path="/viewprofile/:id" element={<Viewprofile/>}/>
  <Route path="/createprofile" element={<Createprofile/>}/>
  <Route path='/edit-profile/:id' element={<Editprofile/>}/>
  <Route path='/delete-profile/:id' element={<Deleteprofile/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
