import './App.css';
import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Trailer from './components/trailer';
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from 'react-router-dom';

function App(props) {
const [Movies, setMovies] = useState([
  {id: "1", name:"Avengers: Endgame", url:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg", synopsis:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.", rating:8.9, trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"},
  {id: "2", name:"Finding Nemo", url: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", synopsis: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.", rating: 8.5, trailer:"https://www.youtube.com/embed/2zLkasScy7A" },
  {id: "3", name:"Aladdin", url: "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_SX300.jpg", synopsis: "When a street urchin finds a lamp with a genie inside, he uses the lamp to turn himself into a prince in order to win the heart of a beautiful princess. But an evil vizier is after the lamp too", rating: 7.5, trailer:"https://www.youtube.com/embed/foyufD52aog" },
  {id: "4", name:"Hellboy", url: "https://m.media-amazon.com/images/M/MV5BODdkMDQzMzItZDc4YS00OGM4LTkxNTQtNjUzNzU0ZmJkMWY2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg", synopsis: "Based on the graphic novels by Mike Mignola, Hellboy, caught between the worlds of the supernatural and human, battles an ancient sorceress bent on revenge.", rating: 8, trailer:"https://www.youtube.com/embed/ZsBO4b3tyZg" },
  {id: "5", name:"Aquaman", url: "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg", synopsis: "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.", rating: 6.5, trailer:"https://www.youtube.com/embed/WDkg3h8PCVU" },
  {id: "6", name:"Deadpool 2", url: "https://www.cinezik.org/critiques/jaquettes/deadpool2.jpg", synopsis: "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry's hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover.", rating: 5, trailer:"https://www.youtube.com/embed/D86RtevtfrA" },
])  
const [keyword, setKeyword] = useState("")
const [rating, setRating] = useState("1")
const setSearchKeywords=(word)=>{
setKeyword(word)
console.log(word)
}
const setSearchRating=(x)=>{
  setRating(""+x)
}
const AddMovie=(name,url,synopsis,rating,trailer)=>{
  setMovies([...Movies, {name:name,url:url,synopsis:synopsis,rating:rating,trailer:trailer}])
}
const Trailer = ({ match }) => {
  const trailer = Movies.find(({ name }) => name === match.params.name)
  return (
    <div>
      <h1 style={{fontFamily: "Georgia, serif" , fontSize:40 , fontWeight:"bolder" , margin: 30 , color: "#212F3C" , textAlign:"center" , textDecoration:"underline"}}>{trailer.name}</h1>
      <span style={{display : "flex" , justifyContent : "center"}}><iframe width="853" height="480" src={trailer.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>
      <p style={{fontFamily: "sans-serif" , fontSize:20 , margin: "30px  70px" , color: "black" , textAlign:"center"}}>{trailer.synopsis}</p>
      <Link to={'/'}><button class="myButton">Return To Home</button></Link>
    </div>
  );
}
  return (
    <div className="App">
      <Router >
      <header className="Container">
        <h1 className="Title">MovieApp Test</h1>
        <Filter setSearchKeywords={setSearchKeywords} SetSearchRating={setSearchRating} keyword={keyword}/>
      </header>
      <body>
      
      </body>
      <Switch>
      <Route exact path="/" render={(props) =><MovieList  AddMovie={AddMovie} Movies={Movies} SearchByKeyword={keyword} SearchByRating={rating} {...props} />} />
      <Route path='/trailer/:name' render={(props) =><Trailer Movies={Movies} {...props} />} /> 
      </Switch>
      </Router>
    </div>
  );
}

export default App;
