import { useState, useEffect } from 'react'
import HistoryAPI from '../../utils/HistoryAPI/HistoryAPI'
import { Container, Card, CardGroup, Form, Button } from 'react-bootstrap'
import './LimitBox.css'
import ChoiceDisplay from '../ChoiceDisplay'

const LimitBox = () => {
	const crypto_name = localStorage.getItem('clicked_coin')
	const real_time_price = localStorage.getItem('clicked_coin_price')

	const [priceState, setPriceState] = useState({
		cyrpto_name: '',
		real_time_price: 0.0,
		sell_amount: 0.0,
		buy_amout: 0.0
	})


	const handleInputChange = ({ target: { name, value } }) => setPriceState({ ...priceState, [name]: value })

	const handleSell = event => {
		event.preventDefault()

		if (priceState.sell_amount === 0.0 || priceState.sell_amount === 0) {
			alert('Put Amount!')
		}
		else {
			let body = {
				"crypto_name": crypto_name,
				"side": "sell",
				"price": real_time_price,
				"amount": priceState.sell_amount
			}

			HistoryAPI.pushTransaction(body)
				.then(data => {
					console.log(data)
					//alert('Selling Transaction success!')
					//window.location.reload(false);
					setPriceState({
						...priceState, real_time_price: real_time_price,
						sell_amount: 0.0,
						buy_amout: 0.0
					})
				})
				.catch(err => console.log(err))
		}
	}

	const handleBuy = event => {
		event.preventDefault()

		if (priceState.buy_amout === 0.0 || priceState.buy_amout === 0) {
			alert('Put Amount!')
		}
		else {
			let body = {
				"crypto_name": crypto_name,
				"side": "buy",
				"price": real_time_price,
				"amount": priceState.buy_amout
			}

			HistoryAPI.pushTransaction(body)
				.then(data => {
					alert(`Buying Transaction success!`)
					window.location.reload(false);
					setPriceState({
						...priceState, real_time_price: real_time_price,
						sell_amount: 0.0,
						buy_amout: 0.0
					})
				})
				.catch(err => console.log(err))
		}

	}

	return (
		<Container id="limitBoxCont" className="mt-5">
			<ChoiceDisplay />
			<CardGroup>
				<Card style={{ width: '18rem' }} className="bg-dark border rounded text-white">
					<Card.Body>
						<Form.Group className="mb-3" controlId="buy_amout">
							<Form.Label column sm="3">
								Amount
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Amount"
								name="buy_amout"
								value={priceState.buy_amout}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="total">
							<Form.Label column sm="3">
								Total
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Total"
								name="total"
								value={priceState.buy_amout * real_time_price} />
						</Form.Group>
						<Button
							variant="warning"
							onClick={handleBuy}>
							Buy</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }} className="bg-dark border rounded text-white">
					<Card.Body>
						<Form.Group className="mb-3" controlId="sell_amount">
							<Form.Label column sm="3">
								Amount
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Amount"
								name="sell_amount"
								value={priceState.sell_amount}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="total">
							<Form.Label column sm="3">
								Total
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Total"
								name="total"
								value={priceState.sell_amount * real_time_price} />
						</Form.Group>
						<Button
							variant="warning"
							onClick={handleSell}>
							Sell</Button>
					</Card.Body>
				</Card>
			</CardGroup>
		</Container>
	)
}

export default LimitBox