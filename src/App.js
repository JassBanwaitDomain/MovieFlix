import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./MovieData";
class App extends React.Component{
  constructor(){
    super();
    this.state={
        movies:movies,
        cartCount:0
      }
  }
handleincStars=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars>=5){
        return;
    }
    else{
        movies[mid].stars+=0.5;
    }
    this.setState({
        movies:movies
    });
}
handleDecStars=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars<=0){
        return;
    }
    else{
        movies[mid].stars-=0.5;
    }
    this.setState({
        movies:movies
    })
}  

handleFav=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav;
    this.setState({
        movies:movies
    })
}
handleCart=(movie)=>{
    let {movies,cartCount}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].cart=!movies[mid].cart;
    if(movies[mid].cart){
      cartCount=cartCount+1;
    }
    else{
      cartCount=cartCount-1;
    }
    this.setState({
        movies:movies,
        cartCount:cartCount
    })
}
  render(){
    const {movies,cartCount}=this.state;
    return(
      <>
          <Navbar cartCount={cartCount}/>
          <MovieList movies={movies} addStars={this.handleincStars}
                                     decStars={this.handleDecStars}
                                     handleFav={this.handleFav}
                                     handleCart={this.handleCart}
          />
      </>
    )
  }
}

export default App;
