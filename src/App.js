import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      monsters: [
        
      ],
      searchField: ''
    };
  }

  componentDidMount () {
    fetch ("https://jsonplaceholder.typicode.com/users").then (
      response => response.json()
    ).then (users => this.setState ( { monsters : users } ));
  }
  
  render () {
    const { monsters, searchField } = this.state;
    monsters.forEach (monster => console.log (monster));
    const filteredMonsters = monsters.filter (monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) );

    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" style={{height: 20+'px'}} />
        </header>
        <h1>Monster Rolodex</h1>
        <SearchBar placeholder='Search...'
          changeAction = { this.handleSearch } />
        <CardList characters={filteredMonsters}>
        
        </CardList>
        
      </div>
    );
  }

  handleSearch = (evnt) => {
    // arrow function para que se setee bien el this
    this.setState({searchField: evnt.target.value});
  }
}

function OtherApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
