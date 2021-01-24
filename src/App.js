/**
 * @format
 */


import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component';
import {Intro} from './components/Introductions/intro'
import './App.css';


class App extends Component {
  initialState = {
    characters: [],
    searchfield: ''
  }
  state = this.initialState;

  handleSearchChange  = (e)=>{
    const searchValue = e.target.value;
    this.setState({
      searchfield: searchValue
    })
  }
  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(resp => resp.json())
      .then(harryPotterCharacters => this.setState({ characters: harryPotterCharacters }))
  }
  render() {
    const { characters,searchfield } = this.state;
    const filteredCharactersAfterSearch = characters.filter(character =>{
      return character.name.toLowerCase().includes(searchfield.toLowerCase()) 
    })
    return (
      <div className="App">
        <Intro />
        <SearchBox 
          placeholder='Search yer wizard'
          handleSearchChange = {this.handleSearchChange}
        />
        <CardList characters={filteredCharactersAfterSearch}>
         
        </CardList>

      </div>
    );
  }
}

export default App;
