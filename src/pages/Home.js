import React from 'react';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Content from '../Components/Content';

function Home(props){

  return(
    <div className="home" >
    <div className="bg-image">  
      <div className="Hero">
        <Hero  title={props.title} linkedin={props.linkedin} github={props.github} subtitle={props.subTitle} text={props.text}/>
      </div>
    </div>
      <h3 className="subtitle-font">Projects</h3>
      <Carousel className="mt-50px" />
    </div>
  );
}


export default Home;