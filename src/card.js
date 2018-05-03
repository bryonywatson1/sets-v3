import React from 'react'

let numberOfClicked = 0

export class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {clicked: false}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		this.props.onClick(this)
		this.setState(prevState => ({
			clicked: !prevState.clicked
		}))
		numberOfClicked++

		// console.log('clicked ', this)
	}
	render() {
		return (
			<div onClick={this.handleClick} className={`card ${this.state.clicked ? 'clicked' : ''}`}>
				<div className={`cardinner  ${this.props.shape} ${this.props.colour} ${this.props.fill} ${this.props.number}`}>
				</div>
			</div>
		)
	}
}
