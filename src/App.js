import React, { Component } from "react";
import './App.css';
import ImageCard from "./components/ImageCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import Score from "./components/Title";

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
  // Setting this.state.friends to the friends json array
  state = {
    images,
    chosen: []
  };
addtoChosen = id => {
  var score= 0;
  var chosen= this.state.chosen;
  var n = chosen.includes(id)
  if (n===false) {

 
chosen.push(id);
  console.log(id);
  this.setState({ chosen });

this.shuffleCards();
score.textcontent++
}
else {
alert("Wrong!")
chosen=[]
}
};
shuffleCards = () =>{
  shuffle(this.state.images);
this.setState({ images: shuffle(this.state.images)
});

}

  render() {
    return (
      <Wrapper>
        <Title>Image List</Title>
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
    
    );
  }
}
export default App;
