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
import AllQuestion from './ManyPages/UserDashboard/AllQuestion/AllQuestion';
import UserProfile from './ManyPages/UserDashboard/UserProfile/UserProfile';
import UserUpdateProfile from './ManyPages/UserDashboard/UserProfile/UserUpdateProfile';
import AdminRoute from './ManyPages/AdminRoute/AdminRoute';
import AdminUserDashboard from './ManyPages/AdminDashboard/AdminUserDashboard/AdminUserDashboard';
import UserPostQuestion from './ManyPages/UserDashboard/UserAddQuestion/UserPostQuestion/UserPostQuestion';
// import AllQuestions from './ManyPages/UserDashboard/AllQuestion/AllQuestion';
import UserAddQuestion from './ManyPages/UserDashboard/UserAddQuestion/UserAddQuestion'
import ManageQuestion from './ManyPages/AdminDashboard/ManageQuestion/ManageQuestion';
import UserPostBook from './ManyPages/UserDashboard/UserAddBook/UserPostBook';
import UserAddBook from './ManyPages/UserDashboard/UserAddBook/UserAddBook';
import ManageBook from './ManyPages/AdminDashboard/AdminUserDashboard/ManageBook/ManageBook';
import AllBooks from './ManyPages/UserService/AllBooks/AllBooks';
import AdminPostBook from './ManyPages/AdminDashboard/AdminUserDashboard/AdminPostBook/AdminPostBook';
import UserPostSyllbus from './ManyPages/UserDashboard/UserAddSyllbus/UserPostSyllbus';
import UserAddSyllbus from './ManyPages/UserDashboard/UserAddSyllbus/UserAddSyllbus';
import AdminPostSyllbus from './ManyPages/AdminDashboard/AdminPostSyllbus/AdminPostSyllbus';
import ManageSyllbus from './ManyPages/AdminDashboard/ManageSyllbus/ManageSyllbus';
import AllSyllbus from './ManyPages/UserService/AllSyllbus/AllSyllbus';
import UserReview from './ManyPages/UserDashboard/UserReview/UserReview';
import Contact from './Shared/Contact/Contact';




function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
     {/* <Header /> */}
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/question" element={<AllQuestion/>} />
     <Route path="/allbooks" element={<AllBooks/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/allSyllbus" element={<AllSyllbus/>} />
     


     {/* user dashboard */}
     <Route path="/dashboard" element={<Dashboard/>}>
     <Route path="/dashboard" element={<UserWelcome/>} />
     <Route path="/dashboard/welcome" element={<UserWelcome/>} />
     <Route path="/dashboard/userProfile" element={<UserProfile/>} />
     <Route path="/dashboard/userUpdate" element={<UserUpdateProfile/>} />
     <Route path="/dashboard/userQuestion" element={<UserPostQuestion/>} />
     <Route path="/dashboard/useraddQuestion" element={<UserAddQuestion/>} />
     <Route path="/dashboard/useraddBook" element={<UserPostBook/>} />
     <Route path="/dashboard/userBook" element={<UserAddBook/>} />
     <Route path="/dashboard/manageBook" element={<ManageBook/>} />
     <Route path="/dashboard/useraddSyllbus" element={<UserPostSyllbus/>} />
     <Route path="/dashboard/userDisplaySyllbus" element={<UserAddSyllbus/>} />
     <Route path="/dashboard/review" element={<UserReview/>} />
   
     
     <Route path="/dashboard/manageQuestion" element={<AdminRoute><ManageQuestion/></AdminRoute>} />
     <Route path="/dashboard/add" element={<AdminRoute><AddQuestion/></AdminRoute>} />
     <Route path="/dashboard/addBook" element={<AdminRoute><AdminPostBook/></AdminRoute>} />
     <Route path="/dashboard/adminaddSyllbus" element={<AdminRoute><AdminPostSyllbus/></AdminRoute>} />
     <Route path="/dashboard/manageSyllbus" element={<AdminRoute><ManageSyllbus/></AdminRoute>} />
      </Route>
     


    
     
     </Routes>
     {/* <Footer></Footer> */}
     </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
