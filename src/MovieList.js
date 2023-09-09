import MovieCard from "./MovieCard";
import React from "react";

class MovieList extends React.Component{

    render(){
        const{movies,addStars,decStars,handleFav,handleCart}=this.props;
        return(
            <>
                {movies.map((movie)=>
                    <MovieCard movies={movie} addStars={addStars}
                    decStars={decStars} handleCart={handleCart} handleFav={handleFav} 
                    key={movie.id}
                    />
                )}
            </>
        )
    }
}
export default MovieList;