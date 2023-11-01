
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import AllHomesScreen from './screens/AllHomesScreen';
import ApartmentScreen from './screens/ApartmentScreen';
import AgentScreen from './screens/AgentScreen';
import Register from './components/Register';
import ListHomeScreen from './screens/ListHomeScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <HomeScreen />}/>
          <Route path='/loginreg' element={ <LoginScreen />}/>
          <Route path='/register' element={ <Register />}/>
          <Route path='/homes' element={ <AllHomesScreen />}/>
          <Route path='/apartments' element={ <ApartmentScreen />}/>
          <Route path='/agents' element={ <AgentScreen />}/>
          <Route path='/listhome' element={ <ListHomeScreen />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
