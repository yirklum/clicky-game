import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <nav>
               <div id="directions">
                    Test your memory! Click on each character, but be sure not to click on the 
                    same character twice. Get to 16 points and you win! Ho yeah!
                </div>   
            
                <div id="score">
                    Score: {this.props.score}
                </div>
             
            </nav>
        );
    }    
}

export default NavBar;