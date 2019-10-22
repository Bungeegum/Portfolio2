import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedIn from '../assets/linkedin.png';
import github from '../assets/github.png';

function Hero(props){

  
  return(
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12} >
            {props.title && <h1 className="title">{props.title}</h1>}
            {props.title && <h3 className="subtitle">{props.subtitle}</h3>}
            {props.title &&
            <div className="icons">
              <a href="https://www.linkedin.com/in/david-valles-079960104/" target="_blank">
                <img className="icon" src={props.linkedin} alt="" width={35}/>
              </a>
              <a href="https://github.com/Bungeegum" target="_blank">
              <img src={props.github} alt="" width={35}/>
              </a>
            </div>

            }
            
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  );

}


export default Hero;
