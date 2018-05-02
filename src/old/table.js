import React from 'react'

import { Card } from './card'

import { newDeck, deal } from './deck'

let seed =new Date().getTime()

let deck = newDeck(seed)
let cardsOnTable = deal(deck,12,seed)



export class Table extends React.Component{
	constructor(props) {
		super(props)
		this.state = {cardsOnTable: cardsOnTable}
	}
	render(){

		return(
			<div id="deck">
				<Card/>
				{this.state.cardsOnTable.map((card) =>
					<Card colour={card.colour}
						number={card.number}
						shape={card.shape}
						fill={card.fill}/>
				)}
			</div>
		)
	}
}
