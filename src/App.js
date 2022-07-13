// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <Routes>
     <Route path="/" element={<Home />} />
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
