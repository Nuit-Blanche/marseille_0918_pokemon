import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import IndexPok from './IndexPok';
import Fetchapi from './Component/Fetchapi';
import ApiCard from './Component/ApiCard';
import CardPok from './CardPok';
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



    );
  }
}

export default App;
