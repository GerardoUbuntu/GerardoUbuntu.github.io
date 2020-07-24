import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home'

function App() {
  return (
    <Layout>
      <div className="App">
        <Home />
      </div>
    </Layout>
  );
}

export default App;
