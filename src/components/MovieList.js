import React, { useState,useEffect } from 'react'
import MovieCard from './MovieCard'

const MovieList=(props)=>{

    const SetValues=()=>{
    let name=prompt('movie name')
    let url=prompt('movie url')
    let synopsis=prompt('movie synopsis')
    let rating=prompt('movie rating')
    let trailer=prompt('movie trailer')
    props.AddMovie(name,url,synopsis,rating)
}
    return (
        <div>
        <div className="MovieList-Container">
            {props.Movies.filter(el=>el.rating>=props.SearchByRating).filter(el=>el.name.toUpperCase().includes(props.SearchByKeyword.toUpperCase())).map(el =>
        <MovieCard Movie={el}/>
        )}
        </div>
        <div className="myButton">
        <a onClick={()=>SetValues()} href="#" class="myButton">AddMovie</a>
        </div>
        </div>


    );
}

export default MovieList;