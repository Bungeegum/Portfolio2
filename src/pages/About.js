import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function About(props){
  return(
    <div>
      <div className="bg-image">
        <div className="hero">
        <Hero title={props.title}/>
        </div>
      </div>
        
        
        <Content >
          <div className="summary">
            <h1>Hello!</h1>
            
            <p> My name is David and I am a front-end developer with a degree in Computer Science & Engineering and love what I do!</p>

            <p>I built my foundational knowledge of programming and logic with java and C++ then over time became more interested in front-end frameworks/languages. Currently I am most comfortable with react, javascript, html/css, and other related tools. </p>

            <p>My five years in programming experience has put me in a position where I can easily pick up and learn new technologies and to this day I am still learning new things! From being a part of award winning developer teams to coding and learning on my own, I enjoy all types of dynamic work enviornments.</p>
          </div>
          
        </Content>
    </div>
  );
}

export default About;