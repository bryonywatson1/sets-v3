import React, { Component } from 'react'
import './App.css'

import { Table } from './table'
import { Info } from './info'

import { newDeck, deal } from './deck'

let seed =new Date().getTime()

let deck = newDeck(seed)
let cardsOnTable = deal(deck,12,seed)



export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {cardsOnTable: cardsOnTable}
		// This binding is necessary to make `this` work in the callback
		this.dealThreeMore = this.dealThreeMore.bind(this)
	}
	dealThreeMore(){
		let cardsOnTable = this.state.cardsOnTable
		let newCards = deal(deck,3,seed)
		console.log('new cards ',newCards)
		this.setState({cardsOnTable : cardsOnTable.concat(newCards)})
	}
	render() {
		return (
			<div id="wrapper">
				<Table cardsOnTable={this.state.cardsOnTable}/>
				<Info onClick={e => this.dealThreeMore(e)}/>
			</div>
		)
	}
}
