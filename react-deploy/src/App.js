import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Route exact path="/" render={props => (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )}/>
            <Route exact path="/about" component={About}/>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
