import React from 'react'


export class Card extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='card'>
				<p> hi</p>
				{/* <div className={`cardinner ${this.props.shape} ${this.props.colour} ${this.props.fill} ${this.props.number}`}> */}
				</div>
			</div>
		)
	}
}
