import React, { Component } from 'react';
import Table from '../../components/table'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        
        <header className="App-header">
          <p>Testing text message</p>
        </header>
        
        <main className="container">
          <Table /> 
        </main>

      </div>
    );
  }
}

export default App;
