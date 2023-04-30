
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <HomeScreen />}/>
          <Route path='/loginreg' element={ <LoginScreen />}/>
          <Route path='/register' element={ <Register />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
