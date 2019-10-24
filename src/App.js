import React, { useContext } from 'react';
import {BrowserRouter as Router,__RouterContext, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import LinkedIn from './assets/linkedin.png';
import github from './assets/github.png';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';



const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};


class App extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      title: 'David Vales',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'David Valles',
        subTitle: 'Front-End Developer',
        text: 'Checkout my projects below',
        imglinkedin: LinkedIn,
        imggithub:github,
  
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }
  render(){
    return (
    <Router>
      <Container className="p-0 " fluid={true}>
        <div className="b-g">
          
            <Navbar sticky="top" className="topnav"  expand="lg">
              <Navbar.Brand>My Portfolio</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          
            <Route path="/" exact render={()=> <Home className="mt-0" title={this.state.home.title} subTitle={this.state.home.subTitle} linkedin={this.state.home.imglinkedin} github={this.state.home.imggithub} text={this.state.home.text}/>}/>
            <Route path="/about" render={()=> <About title={this.state.about.title}/>}/>
           
            
          <Footer/>
        
       </div>
      </Container>
    </Router>
    );
  }
}

export default App;
