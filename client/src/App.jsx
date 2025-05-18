import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogEditor from './components/BlogEditor';
import BlogList from './components/BlogList';
import Home from './components/Home';
import BlogView from './components/BlogView';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<BlogEditor />} />
        <Route path="/list" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogView />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;