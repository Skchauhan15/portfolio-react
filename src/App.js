// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Experience from './components/Experience';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/experience' element={<Experience></Experience>}></Route>
          <Route path='/work' element={<Work></Work>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
