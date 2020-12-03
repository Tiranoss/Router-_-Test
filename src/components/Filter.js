import React, { useState } from "react";



const Filter = (props) => {
    return ( 
       
       <section className="searchbox-wrap">
        <input onChange={(e)=>props.setSearchKeywords(e.target.value)} type="texte" placeholder="Search For Movie ..." className="searchbox"/>
        <select name="" id="" onChange={(e)=>props.SetSearchRating(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
       </section>
     );
}
 
export default Filter;