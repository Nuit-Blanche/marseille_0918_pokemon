import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import IndexPok from './IndexPok';
import Fetchapi from './Component/Fetchapi';
import ApiCard from './Component/ApiCard';
import CardPok from './CardPok';
<<<<<<< HEAD
import Pokedex from './Pokedex';
import {Route,BrowserRouter,Switch,NavLink} from "react-router-dom";
import Home from './Home';



class App extends Component {
 

  render() {
    return (

      <BrowserRouter>
      <div>

        <div className="menu-aloys">
          <div className="un">
             <NavLink exact to="/bienvenue" activeClassName="selected"><img src="https://cdn.pixabay.com/photo/2013/03/29/13/39/home-97609_960_720.png"/></NavLink></div>
          <div className="deux">   
             <NavLink exact to="/attrapes-les-tous" activeClassName="selected"><img src="https://icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png"/></NavLink></div>
          <div className="trois">   
             <NavLink exact to="/trouve-ton-pokemon" activeClassName="selected"><img src="http://i.imgur.com/6n3Mjyp.png"/></NavLink></div>
             </div>

        <div className="menu-aloys2">
          <div className="premier">
             <NavLink exact to="/bienvenue" activeClassName="selected"><img src="https://cdn.pixabay.com/photo/2013/03/29/13/39/home-97609_960_720.png"/></NavLink></div>
          <div className="deuxieme">   
             <NavLink exact to="/attrapes-les-tous" activeClassName="selected"><img src="https://icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png"/></NavLink></div>
          <div className="troisieme">   
             <NavLink exact to="/trouve-ton-pokemon" activeClassName="selected"><img src="http://i.imgur.com/6n3Mjyp.png"/></NavLink></div>
             </div>

          <Switch>
              <Route exact path="/bienvenue" component={Home}/>
              <Route path="/attrapes-les-tous" component={Pokedex}/>
              <Route path="/trouve-ton-pokemon" component={IndexPok}/>

          </Switch>
          
          </div>
     </BrowserRouter>



=======

const pokemonAffiche = {
  name: "Pikachu",
  imageUrl: "https://images.pokemontcg.io/base1/44.png"

};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokicard : pokemonAffiche,
      
    };
  }

  setPokemon(pokemon){
    this.setState({pokicard: pokemon})
  }


  render() {
    return (
      <div className="background App">
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="title"></img>
          <IndexPok setPokemon = {(pokemon) => this.setPokemon(pokemon)} />
          <Fetchapi/>
          <ApiCard/>
          <CardPok pokicard = {this.state.pokicard} />
      </div>
>>>>>>> 24e7b1da440d611b648e16b6e1234a283020280d
    );
  }
}

export default App;
