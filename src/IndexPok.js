import React, { Component } from 'react';
import CardPok from './CardPok';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import SearchBar from './SearchBar.js';

 class IndexPok extends Component {
     constructor(props){
         super(props);
         this.state = {
             searchItem: '',
             currentPokemon: {}
         }
     }

     async searchPokemon(pokemonName){
<<<<<<< HEAD
        console.log(pokemonName)
        const url = `https://api.pokemontcg.io/v1/cards?setCode=base1&name=${pokemonName}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({currentPokemon   : data.cards[0] });
        
=======
        const url = `https://api.pokemontcg.io/v1/cards?setCode=base1&name=${pokemonName}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({currentPokemon   : data.cards[0] });
>>>>>>> 24e7b1da440d611b648e16b6e1234a283020280d
        this.props.setPokemon(data.cards[0])
     }

     getSearch(searchValue){
        this.setState({searchItem: searchValue})
     }

     runRequest(){
         this.searchPokemon(this.state.searchItem)
     }
  render() {
<<<<<<< HEAD
    return (
        <SearchBar getSearch={(searchValue) => this.getSearch(searchValue)} runRequest={() => this.runRequest()}/>
=======
      console.log('IN INDEXPOK', this.state)
    return (


      

        <SearchBar getSearch={(searchValue) => this.getSearch(searchValue)} runRequest={() => this.runRequest()}/>



      
>>>>>>> 24e7b1da440d611b648e16b6e1234a283020280d
    );
  }
}

export default IndexPok;