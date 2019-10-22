import React from 'react';

import CardInfo from '../Components/CardInfo';

function Card(props){
  return(
    <div className="d-inline-block v-card" onClick={(e)=>props.click(props.item)}>
      <img className="v-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
      {<CardInfo title={props.item.title} subTitle={props.item.subTitle} link2={props.item.link2} link={props.item.link}/>}
    </div>

  )
}

export default Card;