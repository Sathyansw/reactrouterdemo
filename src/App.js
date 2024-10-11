import logo from './logo.svg';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Search from './components/Search';
import Validation from './Validation';
import FormikForm from './FormikForm';
import FormikForm2 from './FormikForm2';
import ReactBS from './ReactBS';
import GridBS from './GridBS';
import Imagesdemo from './Imagesdemo';
import CardsBS from './CardsBS';
import MyNavbar from './MyNavbar';
import MyCarousel from './MyCarousel';
import Reducers from './Reducers';
import FetchAPI from './FetchAPI';
function App() {
 
  return (
      <div>
        <FetchAPI />
      </div>
  );
}

export default App;
