import Navbar from '../../components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ControlledCarousel from '../../components/ControlledCarousel'
import './AboutUs.css'
import Footer2 from '../../components/Footer2'

function AboutUs() {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className=" aboutUsPgContent text-center">
				<Container className="aboutUsCont" id="aboutUsHeader">
					<Col id="aboutUsTitle">
						<p class="text-warning" FontAwesomeIcon icon={"fas fa-user"} id="aboutUsIcon" />
						About Us
						<br></br>
						<br></br>
					</Col>
				</Container>
				<Container className="aboutUsCont" id="howToPlay">
					<Row top="xs" xs={12} md={1}>
						<Col id="howToPlay">
							<h3>How to Play CryptoMaster</h3>
						</Col>
					</Row>
				</Container>
				<Container className="aboutUsCont" id="Instructions">
					<Row sm={8}>
						<Col id="Instructions">
							<br></br>
							<br></br>
							<p><h5>Register for a CryptoMaster account. Sign-up is free and it's easy!</h5></p>
							<p><h5>CryptoMaster is a fun way to learn how to trade cryptocurrencies, without risking your own money. No investment required.</h5></p> 
							<p><h5>As a new player, you'll get $1,000 in play money, and simulate buying and selling crypto. Great practice for becoming a CryptoMaster. </h5></p>
							<p><h5>You'll have real time data at your fingertips, you can view your full trading history and weekly progress.</h5></p>
							<p><h5>Bring your best trading strategies and earn your way to the top of the Leaderboard!</h5></p>
							<p><h5><strong>Invite your friends to join, and see how fast you become a CryptoMaster!</strong></h5></p>
							<br></br>
							<br></br>
						</Col>
					</Row>
				</Container>
				<Container className="aboutUsCont" id="ControlledCarousel">
					<Row xs={12}>
						<Col id="Carousel">
							<ControlledCarousel />
						</Col>
					</Row>
				</Container>
				<Footer2 />
			</div>
		</div>)
}

export default AboutUs