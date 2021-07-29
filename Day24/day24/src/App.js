
import './App.css';
import Navi from './components/navi';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
       <div className="App">
              <Navi/>
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/dash" component={Dashboard}/>
              </Switch>
              
     
    </div>
    </Router>
   
  );
}

export default App;
