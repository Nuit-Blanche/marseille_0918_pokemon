import React, { Component } from 'react'

export default class CardPok extends Component {
  render() {
    return (
      <div>
          {
            this.props.pokicard && 
            <div className="Pokemoncard">
              <h3>{this.props.pokicard.name}</h3>
              <img src={this.props.pokicard.imageUrl} alt= "picture"/>
            </div>
          }
      </div>
    )
  }
}
