import React from "react";
import styled from "./Navbar.module.css";
class Navbar extends React.Component{
    render(){
        const {cartCount}=this.props;
        return(
            <>
            <div className={styled.nav}>
                <div className={styled.title}>
                    MovieFlix
                </div>
                <div className={styled.cartContainer}>
                    <img className={styled.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart-image"/>
                    <span className={styled.cartCount}>{cartCount}</span>
                </div>
            </div>
            </>
        )
    }
}
export default Navbar;