import React, { Component } from 'react'

export default class Fetchapi extends Component {
   constructor(props){
       super(props)
       this.state = {
         loading: true,  
         poke: null
       }
    }
     async componentWillMount() {
         const url = "https://pokeapi.co/api/v2/pokemon/";
         const response = await fetch(url);
         const data = await response.json();
         //this.setState({poke: data.results[0] });
      console.log(data);
      };
      
      componentDidMount(){


      }
    
   render() {
    return (
      <div>
       <h1>{this.state.loading}</h1> 
      </div>
    )
  }
}


