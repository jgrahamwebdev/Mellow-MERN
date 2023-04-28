
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={ <HomeScreen />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
