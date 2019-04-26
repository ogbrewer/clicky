import React, { Component } from "react";
import './App.css';
import ImageCard from "./components/ImageCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
class App extends Component {
  state = {
    images,
    chosen: [],
    score: 0
  };
   upScore() {
    const newScore=this.state.score+1;
    console.log(newScore);

    this.setState({ score: newScore });
    console.log(this.state.score)
  };
  addtoChosen = id => {
    var chosen = this.state.chosen;
    var score = this.state.score;
    var n = chosen.includes(id)
    if (n === false) {


      chosen.push(id);
      console.log(id);
      this.setState({ chosen });
      this.shuffleCards();

      this.upScore();
      console.log(this.state.score)
    }
    else {
      alert("Wrong!")
      chosen = []
      this.reSet();
    }
  };

  shuffleCards = () => {
    shuffle(this.state.images);
    this.setState({
      images: shuffle(this.state.images)
    });

  }
  
  reSet = () => {
    const newScore=0;
    console.log(newScore);

    this.setState({ score: newScore });
    console.log(this.state.score)  };
  render() {
    return (
      <Wrapper>
        <Title>Image List Score:{this.state.score} </Title>
        
      
        {this.state.images.map(image => (
          <ImageCard
            selectCard={this.addtoChosen}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}  
      
      </Wrapper>
       
    )
  }
}


export default App;

