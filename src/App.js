import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import Pagesnotfound from './pages/Pagesnotfound';
import PostForm from './pages/PostForm/PostForm';
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/form' element={<PostForm/>}/>
          <Route path="*" element={<Pagesnotfound />} />
        </Routes>
      </Router>
    </>
  
  );
}

export default App;
