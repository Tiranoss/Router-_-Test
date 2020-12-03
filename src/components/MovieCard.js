import React from 'react';
import {Link} from 'react-router-dom'


const MovieCard = (props) => {
    return ( 
    <div className="Card-Container">
        <div className="Cards-list">
        <img src={props.Movie.url} alt=" "/>
        <h1>{props.Movie.name}</h1>
        <Link to={`/trailer/${props.Movie.name}`}>
        Watch Trailer
        </Link>
        </div>

    </div>

     );
}
  
export default MovieCard;