import React from 'react';
import './App.css';
import Home from './Home/index';
import Sobre from './Sobre/index';
import Contato from './Contato/index';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


    function App() {
      return (
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path='/' exact={true}>
                <Home/>       
              </Route>
            <Route path='/Contato'>
              <Contato/>
            </Route>
            <Route path='/Sobre'>
              <Sobre/>
            </Route>
          </Switch>
        <Footer />
        </Router> 
        </div>
      );
    }

export default App;





