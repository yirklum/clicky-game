import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li id="directions">
                        Directions
                    </li>   
            
                    <li id="score">
                        Score: {this.props.score}
                    </li>
                </ul>
            </nav>
        );
    }    
}

export default NavBar;