import './App.css';
import { useEffect } from 'react';
import { Router} from 'react-router-dom'
import Landing from './Components/LandingPage/Landing';
import Login from './Components/Login/Login';
import history from './history';
import Route from './route';
import LandingHeader from './Layouts/LandingHeader';
function App() {
  return (
      <Router history={history}>
          <LandingHeader/>
          <Route/>
      </Router>
  );
}

export default App;
