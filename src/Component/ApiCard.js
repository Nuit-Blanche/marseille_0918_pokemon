import React, { Component } from 'react';

export default class ApiCard extends Component {
   constructor(props){
       super(props)
       this.state = {
         loading: true,  
         poke: null
       }
    };

     async componentDidMount() {
         const url = "https://api.pokemontcg.io/v1/cards?setCode=base1&name=pikachu";
         const response = await fetch(url);
         const data = await response.json();
         //this.setState({poke: data.results[0] });
      console.log(data);
      };
      
      render() {
        return (
          <div>
           <h1>{this.state.loading}</h1> 
          </div>
        )
      }
    }