import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '../Components/Card';
import budget from '../assets/budget.png';
import food from '../assets/food.png';
import recipe from '../assets/recipe.png';
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component {

  constructor(props){
    super(props);
    this.state={
      items: [
        {
            id: 0,
            title: 'Food Randomizer',
            subTitle: 'Tools: React, JS, CSS ',
            imgSrc: food,
            link: 'https://food-app-randomizer.herokuapp.com/',
            link2:'https://github.com/Bungeegum/Food-app',
            selected: false
        },
        {
            id: 1,
            title: 'Expense Managing App',
            subTitle: 'Tools: React,firebase, JS, Sass',
            imgSrc: budget,
            link: 'https://ballin-on-a-budget-react-2.herokuapp.com/',
            link2:'https://github.com/Bungeegum/Budget-app',
            selected: false
        },
        {
            id: 2,
            title: 'Pocket Recipes',
            subTitle: 'Tools: edemam API, React, JS, CSS',
            imgSrc:recipe,
            link: 'https://recipe-api-react.herokuapp.com/',
            link2:'https://github.com/Bungeegum/RecipeApp',
            selected: false
        },
    ]

    }
  }

  handleCardClick = (id,card)=>{
    let items = [...this.state.items];
    items[id].selected=items[id].selected ? false : true;

    items.forEach(item=>{
      if(item.id !==id){
        item.selected=false;
      }
    });

    this.setState({
      items  
      });
  }

  makeItems=(items)=>{
    return items.map(item=>{
      return <Card item={item} click={(e=>this.handleCardClick(item.id, e))} key={item.id}/>
    })
  }

  render(){
    return(
     <Container fluid={true}>
      <Row className="justify-content-around">
        {this.makeItems(this.state.items)}

      </Row>
     </Container>
    );
  }

}

export default Carousel;