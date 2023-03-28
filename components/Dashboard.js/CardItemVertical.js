import React from 'react'
import NoImageDiv from "../UI/NoImageDiv";
const CardItemVertical = (props) => {
  return (
    <div className='mr-4'>
      <a href={`/${props.type}/${props.id}`}>
         {props.image?
         <img src={props.image.includes('http')?props.image:`https://image.tmdb.org/t/p/w342${props.image}`} className="card-img-top" style={props.type==="trailer"?{ borderRadius: '8px'}:{ borderRadius: '8px', height:"210px",width:"140px"  }} alt="..." />
         :<NoImageDiv height="210px" width="140px"/>
         }
      </a>
      <p style={{ fontSize: '12px' }} className="mt-1 flex-wrap ">{props.title.length > 18 ? props.title.slice(0, 18) + "..." : props.title}</p>
    </div>
  )
}

export default CardItemVertical