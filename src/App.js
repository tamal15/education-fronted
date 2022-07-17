// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from '../src/Login/Register/Register';
import Footer from './Shared/Footer/Footer';
import AddQuestion from './ManyPages/UserDashboard/AddQuestion/AddQuestion';
import AuthProvider from './ManyPages/Context/AuthProvider';
import Dashboard from './ManyPages/Dashboard/Dashboard';
import UserWelcome from './ManyPages/UserDashboard/UserWelcome/UserWelcome';




function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
     <Header />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/add" element={<AddQuestion/>} />
     


     {/* user dashboard */}
     <Route path="/dashboard" element={<Dashboard/>}>
     <Route path="/dashboard" element={<UserWelcome/>} />
     <Route path="/dashboard/welcome" element={<UserWelcome/>} />
      </Route>
     
     
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
