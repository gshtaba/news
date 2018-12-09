import React, { Component } from 'react';
import NewsList from './NewsList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <form>
                <h1>Новости</h1>
                <NewsList/>
            </form>
      </div>
    );
  }
}

export default App;
