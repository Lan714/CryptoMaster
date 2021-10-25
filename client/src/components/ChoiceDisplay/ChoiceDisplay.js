import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const ChoiceDisplay = () => {
	const [choice, setChoice] = useState({
		name: ''
	})

	useEffect(() => {
		setChoice({
			name: localStorage.getItem('clicked_coin').toUpperCase(),
			price: localStorage.getItem('clicked_coin_price')
		})
	})

	return (
		<Card className="bg-dark border rounded text-white">
			<Card.Body>
				Current choice 	: {choice.name} for ${choice.price}
			</Card.Body>
		</Card>
	)
}

export default ChoiceDisplay