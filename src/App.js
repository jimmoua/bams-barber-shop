import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Register from './components/pages/Register';
import Login from './components/pages/Login';


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home}/>
                </Switch>
                <Switch>
                    <Route path='/services' exact component={Services}/>
                </Switch>
                <Switch>
                    <Route path='/login' exact component={Login}/>
                </Switch>
                <Switch>
                    <Route path='/register' exact component={Register}/>
                </Switch>
            </Router>
            
        </>
      
    )
}

export default App