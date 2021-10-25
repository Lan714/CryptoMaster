import { useState, useEffect } from 'react'
import HistoryAPI from '../../utils/HistoryAPI'
import Navbar from '../../components/NavBar'
import { Dropdown, Container, Row, Col } from 'react-bootstrap'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import * as ReactBootStrap from 'react-bootstrap'
import Footer from '../../components/Footer'
import './History.css'

const History = () => {
	const [historyState, setHistoryState] = useState({
		weekNumber: '',
		historys: []
	})

	const [overviewState, setOverviewState] = useState([{
		cash_balance: '',
		coin_balance: '',
		profit: ''
	}])

	const [transcationState, setTransactionState] = useState([])
	const [weekNumState, setWeekNumState] = useState(0)
	const [loading, setLoading] = useState(false)

	const getTransaction = (weekNum) => {
		HistoryAPI.getTransaction(weekNum)
			.then((data) => {
				setTransactionState(data.data)
			})
		setLoading(true)
	}

	const getHistory = (weekNum) => {
		HistoryAPI.getHistory(weekNum)
			.then((data) => {
				setWeekNumState(data.data[0].weekNumber)
				setOverviewState([{
					cash_balance: data.data[0].cash_balance,
					coin_balance: data.data[0].crypto_balances,
					profit: data.data[0].profit
				}])

				getTransaction(data.data[0].weekNumber)
			})
	}

	useEffect(() => {

		HistoryAPI.getWeekNum()
			.then(({ data: historys }) => {
				historys = historys.sort()
				setHistoryState({ ...historyState, historys })
			})
			.catch(err => {
				console.log(err)
				window.location = '/'
			})
	}, [])

	const renderOverview = (overview, index) => {
		return (
			<tr key={index}>
				<td>{overview.cash_balance}</td>
				<td>{overview.coin_balance}</td>
				<td>{overview.profit}</td>
			</tr>
		)

	}

	const renderTransaction = (transaction, index) => {
		if (transaction.side === 'sell') {
			return (
				<tr key={index}>
					<td>{transaction.date}</td>
					<td>{transaction.crypto_name}</td>
					<td style={{ background: 'green' }}>{transaction.side}</td>
					<td>{transaction.price}</td>
					<td>{transaction.amount}</td>
					<td>{transaction.total}</td>
				</tr>
			)
		}
		else {
			return (
				<tr key={index}>
					<td>{transaction.date}</td>
					<td>{transaction.crypto_name}</td>
					<td style={{ background: 'red' }}>{transaction.side}</td>
					<td>{transaction.price}</td>
					<td>{transaction.amount}</td>
					<td>{transaction.total}</td>
				</tr>
			)
		}
	}

	return (
		<div className="historyPg">
			<Navbar />
			<div className="pgContent">
				<Container id="histHeader">
					<Row>
						<Col id="histTitle">
							<FontAwesomeIcon icon={faWallet} id="histIcon" />
							History
						</Col>
					</Row>
				</Container>
				<Container id="histTableCont">
					<Row>
						<Col className="d-flex justify-content-center align-items-center">
							<Dropdown>
								<Dropdown.Toggle className="weekTogBtn" variant="dark" id="dropdown-basic">
									Week
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{
										historyState.historys.map((weekNumber) => (<DropdownWeeknumForm
											weekNum={weekNumber}
											getfunction={getHistory} />))
									}
								</Dropdown.Menu>
							</Dropdown>
						</Col>
					</Row>
					<br />
					{loading ? (
						<div>
							<Row>
								<Col className="d-flex justify-content-center align-items-center mt-2" id="histTableTitle">
									Week {weekNumState}'s Overview
								</Col>
							</Row>
							<br />
							<Row>
								<ReactBootStrap.Table striped bordered hover variant="dark" className="text-center">
									<thead>
										<tr>
											<th>Cash Balance</th>
											<th>Coin Balance</th>
											<th>Profit</th>
										</tr>
									</thead>
									<tbody>
										{
											overviewState.map(renderOverview)
										}
									</tbody>
								</ReactBootStrap.Table>
							</Row>
							<br />
							<Row>
								<ReactBootStrap.Table bordered hover variant="dark" className="text-center">
									<thead>
										<tr>
											<th>Date Time</th>
											<th>Coin Name</th>
											<th>Side</th>
											<th>Price</th>
											<th>Amount</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										{
											transcationState.map(renderTransaction)
										}
									</tbody>
								</ReactBootStrap.Table>
							</Row>
						</div>
					)
						: (
							<div className="d-flex justify-content-center align-items-center text-white">
								Select week number...
								<ReactBootStrap.Spinner animation="grow" />
							</div>
						)
					}
				</Container>
				<Footer />
			</div>
		</div>
	)
}

export default History