import React from "react";
import style from "./MovieCard.module.css";
class MovieCard extends React.Component{

    render(){
        const {title,plot,poster,price,rating,stars,fav,cart}=this.props.movies;
       
        return(
            <div className={style.main}>
                <div className={style.movieCard}>
                    <div className={style.left}>
                        <img src={poster} alt="poster"/>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>{title}</div>
                        <div className={style.plot}>{plot}</div>
                        <div className={style.price}>Rs.{price}</div>
                        <div className={style.footer}>
                            <div className={style.rating}>imdb {rating}</div>
                            <div className={style.yourRating}>
                                <img className={style.icon} onClick={()=>{this.props.addStars(this.props.movies)}} src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="plus"/>
                                <img className={style.starIcon} src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star"/>
                                <img className={style.icon} onClick={()=>{this.props.decStars(this.props.movies)}} src="https://cdn-icons-png.flaticon.com/128/9068/9068779.png" alt="minus"/>
                                <span className={style.stars}>{stars}</span>
                            </div>
                            <div className={style.buttons}>
                                <button className={fav?style.unfavourite:style.favourite} onClick={()=>{this.props.handleFav(this.props.movies)}} >{fav?"Un-Favourite":"Favourite"}</button>
                                <button onClick={()=>{this.props.handleCart(this.props.movies)}} className={cart?style.uncart:style.cart} >{cart?"Remove from Cart":"Add to Cart"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieCard;