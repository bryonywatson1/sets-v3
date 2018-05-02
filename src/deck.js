import seedrandom from 'seedrandom'



export const shuffle = (array, seed) => {
	let j, x, i
	for (i = array.length; i; i -= 1) {
		j = Math.floor(seedrandom(seed + i)() * i)
		x = array[i - 1]
		array[i - 1] = array[j]
		array[j] = x
	}
}


export const newDeck = (seed) => {
	const colour = ['red','green','purple']
	const number = ['one','two','three']
	const shape = ['diamond','squiggle','oval']
	const fill = ['solid','stripe','stroke']
	const deck = []

	colour.forEach ( (c) => {
		number.forEach((n) =>{
			shape.forEach((s) =>{
				fill.forEach((f) =>{
					deck.push({'colour':c, 'number':n, 'shape':s, 'fill':f,})
				})
			})
		})
	})

	shuffle(deck, seed)
	return deck


}


export const deal = (deck, n, seed) => {
	if(n === 1) {
		const r = Math.floor(seedrandom(seed)() * deck.length)
		let dealtCard = deck.splice(r,1)

		console.log('dealt card ',dealtCard)

		// console.log('newdeck ', deck, 'card ', dealtCard)
		return [deck, dealtCard]
	}

	let dealtCards = []
	let newDeck = deck
	for(let i = 0; i < n; i += 1) {
		let [d, c] = deal(newDeck, 1, seed + i)
		console.log('dealtcards' ,dealtCards)
		console.log('deck ', d, 'card ', c)
		dealtCards.push(c[0])
		newDeck = d
	}
	return dealtCards
}
