
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <HomeScreen />}/>
          <Route path='/loginreg' element={ <LoginScreen />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
