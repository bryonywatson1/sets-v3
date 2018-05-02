import React from 'react'

import { Card } from './card'



export class Table extends React.Component{
	// constructor(props) {
	// 	super(props)
	// 	this.state = {cardsOnTable: cardsOnTable}
	// }
	render(){

		return(
			<div id="deck">
				{this.props.cardsOnTable.map((card, i) =>
					<Card colour={card.colour}
						number={card.number}
						shape={card.shape}
						fill={card.fill}
						key={i}/>
				)}
			</div>
		)
	}
}
