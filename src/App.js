// Import required files
import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import characters from "./characters.json";
import "./App.css";

// Set up initial state, set score to 0, empty selected characters array
class App extends Component {

  state = {
    characters,
    score: 0,
    selectedCharacters: [],
  };

  // Check if a character has already been clicked on, adjust array accordingly
  selectCharacter = event => {
    const clickedCharacter = event.target.alt;
    const alreadySelected = this.state.selectedCharacters.indexOf(clickedCharacter) > -1;
    
    // If character is already selected, shuffle cards and restart
    if (alreadySelected) {
      this.setState({
        characters: this.state.characters.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        // Clear array and reset score
        selectedCharacters: [],
        score: 0
      });
      // Tell player they lost
      alert("Got-dang it! That choice ain't right!");

    // If character has not already been selected, reshuffle cards, add to score and add to array
    } else {
      this.setState(
        {
          characters: this.state.characters.sort(function(a,b) {
            return 0.5 - Math.random();
          }),
          selectedCharacters: this.state.selectedCharacters.concat(clickedCharacter),
          score: this.state.score + 1
        },

        // When player gets 16 points, tell them they won and reset game
        () => {
          if (this.state.score === 15) {
            alert("Ho yeah! You won!");
            this.setState({
              characters: this.state.characters.sort(function(a,b) {
                return 0.5 - Math.random();
              }),
              selectedCharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };

// Render elements in order of appearance

  render() {
    return (
      <Wrapper>
        <Title />
        <br />
        <NavBar 
          score={this.state.score}
        />
        <br />
        {/* Use map method to render character cards */}
        {this.state.characters.map(characters => (
          <CharacterCard
            selectCharacter={this.selectCharacter}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
      </Wrapper>
    );
  }
}

// Export file for use in index.js
export default App;
