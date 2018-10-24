import React, { Component,} from 'react'
<<<<<<< HEAD
import {AutoComplete} from 'primereact/autocomplete';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchValue: '',
    searchResults: []
  }

  autocompleteSearch(){
    let url = `https://api.pokemontcg.io/v1/cards?setCode=base1&name=${this.state.searchValue}`;
    setTimeout(() => {
      fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({searchResults: response.cards}));
    }, 500)
  }

  setValues(e){
    this.setState({searchValue: e.target.value})
    this.props.getSearch(e.target.value)
  }

  itemTemplate(pokemon) { 
    return ( 
    <div className="p-clearfix"> 
      <img alt={pokemon.name} src={pokemon.imageUrl} 
        style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} 
      /> 
    <div style={{ fontSize: '18px', float: 'right', margin: '10px 10px 0 0' }}>{pokemon.name}</div> </div> ); 
  }

  render() {
    return (
      <div className="divflex">
        <FormGroup>
          <AutoComplete value={this.state.searchValue}
            onSelect={() => this.props.runRequest()}
            inputStyle={{borderColor: "red"}}
            suggestions={this.state.searchResults}
            itemTemplate={this.itemTemplate.bind(this)}
            completeMethod={() => this.autocompleteSearch()} field="name"
            size={30} placeholder="Recherche Pokemon" minLength={2} onChange={(e) => this.setValues(e)} 
          />
        </FormGroup>
=======
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';

 class SearchBar extends Component {
  render() {
    return (
      <div className="divflex">

               <FormGroup>
                <FormControl 
                  type="text" 
                  placeholder="Recherche Pokémon"
                  onChange={(e) => this.props.getSearch(e.target.value)}
                />
              </FormGroup>{' '}
              <Button 
              onClick={() => this.props.runRequest()}
              type="submit">Search</Button>
>>>>>>> 24e7b1da440d611b648e16b6e1234a283020280d
      </div>
    )
  }
}
export default SearchBar;
