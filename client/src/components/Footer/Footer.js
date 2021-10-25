import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUsers, faAddressBook, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
      <div className="footer">
        <div className="container" id="about">

          <div className="row">
            <div className="col-md-4 col-xs-2" id="column">
              <h4><FontAwesomeIcon icon={faInfoCircle} className="icon"/>About CryptoMaster</h4>
              <p className="text"> This is a gaming app that allows users to practice their skills in crypto currency exchange.Test yours skills to see if you have what it takes to be ahead of the crypto curve. Happy Gaming! 
              </p>
            </div>
            <div className="col-md-3 col-xs-2 links" id="column">
              <h4 className="mt-lg-0 mt-sm-3"><FontAwesomeIcon icon={faUsers} className="icon" />About us</h4>
              <ul className="list-unstyled">
                <li> <a href="https://github.com/jypkr">Jaeyeon Park</a></li>
                <li> <a href="https://github.com/Lan714">Lan Bui</a></li>
                <li> <a href="https://github.com/jjbenson13">Jasmine Benson</a></li>
                <li> <a href="https://github.com/shannono18">Shannon Rayes</a></li>
                <li> <a href="https://github.com/remireems">Remi Kim</a></li>
                <li> <a href="https://github.com/Heaulin">Samantha Mack</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-2" id="column">
              <h4 className="mt-lg-0 mt-sm-4">
                <FontAwesomeIcon icon={faAddressBook} className="icon" />Contact us</h4>
              <p className="mb-0">
                <FontAwesomeIcon icon={faPhone} className="icon2" />(541) 754-3010</p>
              <p className="mb-0">
                <FontAwesomeIcon icon={faEnvelope} className="icon2" />crypto@aol.com
                </p>
            </div>
          </div>
          <div className="row mt-1">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© 2021. All Rights Reserved.  !DISCLAIMER! This is not a monetary game, gains and losses made during the game do not carry outside the game! Want to find out more about CryptoMaster <a  href="./Aboutus" className="click">CLICK HERE</a></small></p>
    </div>
  </div>
        </div>
      </div>
  )
}
export default Footer