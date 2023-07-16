
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import AddEditBlog from './pages/addEditBlog';
import BlogDetails from './pages/blogDetails';
import Auth from './pages/auth';
import PageNotFound from './pages/pageNotfound';
import Header from './components/header';
import CatPage from './pages/catPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import ProtectedLink from './protectedLinks';
import Loader from './components/loader/loader';
import './style.scss';
function App() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className='App'>
      {
        pathName == "/auth" ? null : <Header />
      }
      <ToastContainer />
      <Loader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/editBlog/:id ' element={<AddEditBlog />} />
          <Route path='/blog/details/:id' element={<BlogDetails />} />
          <Route path="/category/:name" element={<CatPage />} />
          <Route path='/auth' element={<Auth />} />
          <Route path="/createNew" element={<ProtectedLink>
            <AddEditBlog/>
          </ProtectedLink>}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>



      {
        pathName == "/auth" ? null : <Footer />
      }
    </div>
  );
}

export default App;
