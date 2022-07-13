import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Header />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
