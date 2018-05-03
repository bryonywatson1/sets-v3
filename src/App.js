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
		this.checkIfSet = this.checkIfSet.bind(this)

	}
	checkIfSet(cards){
		console.log('cards', cards)
		let cardProps = ['props.colour','props.shape','props.fill','props.number']
		cardProps.forEach(function(property){
			console.log(cards[0][property])
			console.log(cards[0].props.colour)

			if (cards[0][property] === cards[1][property] && cards[0][property] === cards[2][property] || cards[0][property] !== cards[1][property] && cards[0][property] !== cards[2][property] && cards[1][property] !== cards[2][property]) {
				console.log('correct ', property)
			}
			else{
				console.log('not a set!')
			}
		}
		)}
	// if (cards[0].props.colour === cards[1].props.colour && cards[0].props.colour === cards[2].props.colour || cards[0].props.colour !== cards[1].props.colour && cards[0].props.colour !== cards[2].props.colour && cards[1].props.colour !== cards[2].props.colour) {
	// 	if(cards[0].props.fill === cards[1].props.fill && cards[0].props.fill === cards[2].props.fill || cards[0].props.fill !== cards[1].props.fill && cards[0].props.fill !== cards[2].props.fill && cards[1].props.fill !== cards[2].props.fill) {
	// 		if(cards[0].props.shape === cards[1].props.shape && cards[0].props.shape === cards[2].props.shape || cards[0].props.shape !== cards[1].props.shape && cards[0].props.shape !== cards[2].props.shape && cards[1].props.shape !== cards[2].props.shape) {
	// 			if(cards[0].props.number === cards[1].props.number && cards[0].props.number === cards[2].props.number || cards[0].props.number !== cards[1].props.number && cards[0].props.number !== cards[2].props.number && cards[1].props.number !== cards[2].props.number) {
	// 				console.log('set found!')
	// 			}}}
	// 	return true
	// } else {
	// 	console.log('not a set')
	// 	return false
	//
	// }

	// var checkingAllCombos = []
	// for (var i = 1; i <= 4; i++) {
	// 	checkingAllCombos.push(numberChecker(i))
	// }
	// var isAllTrue = true
	// for (var k = 0; k < checkingAllCombos.length; k++) {
	// 	if (checkingAllCombos[k] == false) {
	// 		isAllTrue = false
	// 	}
	// }
	// checkingAllCombos = []
	// return isAllTrue
	dealThreeMore(){
		let cardsOnTable = this.state.cardsOnTable
		let newCards = deal(deck,3,seed)
		console.log('new cards ',newCards)
		this.setState({cardsOnTable : cardsOnTable.concat(newCards)})
	}
	render() {
		return (
			<div id="wrapper">
				<Table checkIfSet={e => this.checkIfSet(e)} cardsOnTable={this.state.cardsOnTable}/>
				<Info onClick={e => this.dealThreeMore(e)}/>
			</div>
		)
	}
}
