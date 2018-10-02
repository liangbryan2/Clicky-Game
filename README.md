# Clicky-Game

Clicky memory game built on React.js

[Click Game](https://liangbryan2.github.io/Clicky-Game/)

The goal of the game is to click on an image that you have not clicked on before. Everytime you click on an image, the order is randomized to add a challenge. There are 12 total images, so if you hit all 12, you win.

![index](https://raw.githubusercontent.com/liangbryan2/Clicky-Game/master/Screenshots/index.png)

## Getting Started

### Technologies Used

### [React.js](https://reactjs.org/)

The main goal of this project was learning how to use react. It is a brand new way of creating a webpage for me. There is a not of new syntax and a very different way of organizing the file structure. [Create-react-app](https://github.com/facebook/create-react-app) helped a lot with setting up the initial files because I mostly only had to write code in the src folder.

### [Yarn](https://yarnpkg.com/en/)

Yarn is very similar to [NPM](https://www.npmjs.com/) in that they are both node package managers. I am not really sure which one has an advantage over the other and this is also the first time I've used Yarn. So far, both seen to get the job done and I have no preference for one or the other.

### Other Technologies

The Normal 3

1. HTML
2. CSS
3. JavaScript

And I used [Bootstrap](http://getbootstrap.com/) for the pre-built componenets and the grid fuction.

## Building the Game

### Cards

There are 12 cards that all serve the same purpose, so logically, there should be one card component. The cards are made of an id, an image, and an on click function.

```javascript
import React from "react";
import "./Card.css";

const Card = props => (
  <div className="col-12 col-sm-6 col-lg-3">
    <div className="card shadow">
      <img
        className="card-img-top"
        alt={props.name}
        src={props.image}
        onClick={() => props.clickImage(props.id)}
      />
    </div>
  </div>
);

export default Card;
```

### The on click function

This is the main function that runs the game. I do condition checks for if the card had been clicked, then I run other functions that branch from this main function. When the setState funciton is called, the cards re-render and the order is randomized and the clicked cards tracker is also updated. If the user loses, this function will also call on the appropriate function for a loss.

```javascript
clickImage = id => {
  this.setState({ score: this.state.current });
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
```

### Learning Points

React was a complete shift from normal web development. You have to build a different component for each section of your page. You then render all the components seprately and combine them all into one single file. It is very modular, and may seem unnecessary at times, but it allows us to do something really powerful. It allows us to refresh a specific part of our web page without refreshing the entire page. I am still learning a lot of the stuff you can do with React. For example, I used a Bootstrap modal like so,

``` html
<Modal
  display={this.state.display}
  current={this.state.score}
  highest={this.state.highest}
  closeModal={this.closeModal}
/>
```
I change the display of the modal based on the state of the App and send it over to the Modal component as a prop. This works nice and fine, but after writing the code, I find out there is a react-modal package I could have used specifically for modals. So I need to experience more of React to add more tools to my tool belt.

# Author
[liangbryan2](https://github.com/liangbryan2)

Check out my other projects
