import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box-components';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchFeild: ''
    };

    // this.handleChange = this.handleChange.bind(this)
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters : users}));
};


handleChange = e => {
  this.setState({ searchFeild : e.target.value})
}


  render(){
    const { monsters, searchFeild } =  this.state;
    const filterMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      );


    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.name}</p>
        <button 
        onClick={()=>
          this.setState({ name: 'Hello Lalboon Chauhan'})
        }
        >Change Text</button>
      </header> */}
    </div>      
    )
  }
}

export default App;
