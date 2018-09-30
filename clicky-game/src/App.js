import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import cards from "./cards.json";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    clickedCards: {},
    highest: 0,
    current: 0
  };

  resetCurrent = () => {
    this.setState({ clickedCards: {}, current: 0 });
  };

  clickImage = id => {
    console.log(this.state.clickedCards);
    if (this.state.clickedCards[id]) {
      this.resetCurrent();
      if (this.state.current > this.state.highest) {
        this.setState({ highest: this.state.current });
        this.resetCurrent();
      } else {
        return;
      }
    } else {
      const clickedCards = this.state.clickedCards;
      clickedCards[id] = true;
      let length = Object.keys(this.state.clickedCards).length;
      this.setState({
        clickedCards: clickedCards,
        current: length
      });
    }
  };

  render() {
    return (
      <div>
        <Header current={this.state.current} highest={this.state.highest} />
        <div className="container">
          <div className="row">
            {cards.map(card => (
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
      </div>
    );
  }
}

export default App;
