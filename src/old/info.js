import React from 'react';



export class Info extends React.Component{
  render(){
    return(
        <div id="setsscored">
          <div id="setsscoredinner">
            <h1>Sets</h1>
            <p>score:</p>
            <p id="wins">{this.props.score}</p>
          </div>
          <button onClick={this.props.onClickDeal}>Deal 3 more</button>
        </div>
    );
  }
};
