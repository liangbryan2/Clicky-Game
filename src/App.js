import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import cards from "./cards.json";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Modal from "./components/Modal/Modal";
import Wrapper from "./components/Wrapper/Wrapper";

class App extends Component {
  state = {
    clickedCards: {},
    highest: 0,
    current: 0,
    cards: cards,
    message: "Click an image to start.",
    class: "test",
    display: "hidden",
    score: 0
  };

  closeModal = () => {
    this.setState({ display: "up" });
  };

  resetCurrent = () => {
    this.setState({ clickedCards: {}, current: 0 });
  };

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  clickImage = id => {
    this.setState({ score: this.state.current })
    if (this.state.clickedCards[id]) {
      this.setState({
        message: "You guessed incorrectly",
        class: "red",
        display: "down"
      });
      this.resetCurrent();
      if (this.state.current > this.state.highest) {
        this.setState({ highest: this.state.current });
        this.resetCurrent();
      }
    } else {
      this.setState({ message: "You guessed correctly", class: "green" });
      const clickedCards = this.state.clickedCards;
      clickedCards[id] = true;
      let length = Object.keys(this.state.clickedCards).length;
      this.setState({
        clickedCards: clickedCards,
        current: length
      });
    }
    this.setState({ cards: this.shuffle(this.state.cards) });
  };

  render() {
    return (
      <Wrapper closeModal={this.closeModal}>
        <Nav
          current={this.state.current}
          highest={this.state.highest}
          message={this.state.message}
          class={this.state.class}
        />
        <Header />
        <div className="container">
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                name={card.name}
                id={card.id}
                image={card.image}
                clickImage={this.clickImage}
                key={card.id}
              />
            ))}
          </div>
        </div>
        <Modal
          display={this.state.display}
          current={this.state.score}
          highest={this.state.highest}
          closeModal={this.closeModal}
        />
      </Wrapper>
    );
  }
}

export default App;
