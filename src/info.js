import React from 'react'


export class Info extends React.Component{
	constructor(props) {
		super(props)
		this.state = {score: 0}

	}


	render(){
		return(
			<div id="setsscored">
				<div id="setsscoredinner">
					<h1>Sets</h1>
					<p>score:</p>
					<p id="wins">{this.state.score}</p>
				</div>
				<button onClick={this.props.onClick}>Deal 3 more</button>
			</div>
		)
	}
}
