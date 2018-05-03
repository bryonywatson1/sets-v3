import React from 'react'

import { Card } from './card'

let clickedCards = []
let numberOfClicked = 0

export class Table extends React.Component{
	constructor(props) {
		super(props)
		// This binding is necessary to make `this` work in the callback
		this.clickedCard = this.clickedCard.bind(this)
		this.state = {clicked: false}

	}
	clickedCard(card){
		console.log('card clicked ',card)
		numberOfClicked++
		clickedCards.push(card)
		if (numberOfClicked == 3){
			this.setState(prevState => ({
				clicked: false
			}))
			console.log('3 clicked!')
			numberOfClicked == 0
			this.props.checkIfSet(clickedCards)

		}
	}
	render(){

		return(
			<div id="deck">
				{this.props.cardsOnTable.map((card, i) =>
					<Card
						clicked={this.state.clicked}
						onClick={card => this.clickedCard(card)}
						colour={card.colour}
						number={card.number}
						shape={card.shape}
						fill={card.fill}
						key={i}
					/>
				)}
			</div>
		)
	}
}
