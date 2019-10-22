import React from 'react';
import {useSpring, animated} from 'react-spring';


function CardInfo(props){

  const style=useSpring({opacity: 1, from: {opacity:0}});

  return(
    <animated.div className="v-card-info" style={style}>
    <p className="v-card-title">{props.title}</p>
    <p className="v-card-sub-title">{props.subTitle}</p>
    <a className="link" href={props.link} target="_blank" rel="noopener noreferrer">View Project</a>
    <a className="link" href={props.link2} target="_blank" rel="noopener noreferrer">View Code</a>
    </animated.div>
  );
}

export default CardInfo;