import React, { Component } from 'react';
import './App.css';
import './Pokedex.css';
import Pokemon from './Pokemon.gif';
import { Container, Row, Col } from 'reactstrap';



class App extends Component {
  render() {
    return (

      <div className="App">


      <header className="App-header">
      <Container>
        <Row>
          <Col>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      <img src={Pokemon} className="App-Pokemon" alt="Pokemon" />
      <div class="rectangle"></div>
      </Col>  
      </Row>
      </Container>
      </header>


              


      </div>

    );
  }
}

export default App;