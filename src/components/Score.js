import React from "react";

// By extending the React.Component class, Score inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Score component
  state = {
    score: 0
  };
  addtoChosen = id => {
    var chosen = this.state.chosen;
    var n = chosen.includes(id)
    if (n === false) {
      this.upScore();

    }
    else{
      this.reSet();

    }
  }
    
  // handleIncrement increases this.state.score by 1
  upScore = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // handleDecrement decreases this.state.score by 1
  reSet = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score = 0 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
       
        <div className="card-body">
          <p className="card-text">Click score: {this.state.score}</p>
    
         
        </div>
      </div>
    );
  }
}

export default Score;
