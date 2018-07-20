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


  selectCharacter = event => {
    const clickedCharacter = event.target.alt;
    console.log(clickedCharacter.name);
    const alreadySelected = this.state.selectedCharacters.indexOf(clickedCharacter) > -1;

    if (alreadySelected) {
      this.setState({
        characters: this.state.characters.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        selectedCharacters: [],
        score: 0
      });
      alert("Dangit! That choice ain't right!");
    } else {
      this.setState(
        {
          characters: this.state.characters.sort(function(a,b) {
            return 0.5 - Math.random();
          }),
          selectedCharacters: this.state.selectedCharacters.concat(clickedCharacter),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 16) {
            alert("Hooyah! You won!");
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

// Method to shuffle character cards between clicks
// shuffleCards = (array) => {
//   let characterArray = characters;
//   for (let i = characterArray.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [characterArray[i], characterArray[j]] = [characterArray[j], characterArray[i]];
//   }
//   return characterArray
// }

// Add character to selected array
// selectCharacter = (name) => {
//   let selected = this.state.selected;

//   // Check if character has been selected
//   if (selected.indexOf(name) === -1) {
//     // Add character to array and add to score
//     this.setState({
//       selected: selected.concat(name),
//       score: this.state.score + 1,
//       highScore: this.state.score + 1 > this.state.highScore ? this.state.score + 1 : this.state.highScore,
//       message: "Correct! Hoo-ya!"
//     })
//     this.shuffleCards();
//   }
//   // Shuffle cards, reset score, clear array
//   else {
//     this.setState({
//       message: "Dangit! That choice ain't right!",
//       score: 0,
//       selected: []
//     })
//   }
// }



  // displayCards = id => {
  //   this.state.characters.forEach((image) => {
  //     if (image.id === id) {
  //       if (image.selected) {
  //         alert("Sorry, this card has already been selected.");
  //         this.setState({})
  //         this.reset();
  //         return false;
  //       }
  //       else {
  //         this.addToScore();
  //         image.selected = true;
  //       }
  //       if (this.state.score >= this.state.highScore) {
  //         this.newHighScore();
  //       }
  //     }
  //   });
  // }



  render() {
    return (
      <Wrapper>
        <Title>Characters</Title>
        <NavBar 
          score={this.state.score}
        />
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

export default App;
