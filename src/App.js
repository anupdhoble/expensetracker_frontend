
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Add from './components/Add';
import Signup from './components/Signup';
import { useContext } from "react";
import Login from './components/Login';


import UserContext from "./context/user/UserContext";

function App() {
//   const user=useContext(UserContext);
//   if(localStorage.getItem('authToken')){
//     user.handleLogin();
// }
  const showNotification = (message, type) => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast.info(message);
        break;
      default:
        toast(message);
    }
  };
  const {loading} = useContext(UserContext);
  if(loading){
    return <h1>Loading...</h1>
  }
  return (

    
      <>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Table showNotification={showNotification} toast={toast}/>} />
          <Route exact path="/add" element={<Add showNotification={showNotification} toast={toast}/>} />
          <Route exact path="/login" element={<Login showNotification={showNotification} toast={toast}/>} />
          <Route exact path="/signup" element={<Signup toast={toast}/>} />
        </Routes>
      </>


  );
}

export default App;
