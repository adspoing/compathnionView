import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router' // 引入Link处理导航跳转

export default class Footer extends Component {
	render(){
		return(
			<div className="footer">
				<div className="footContainer">
					<div className="compathnion">
						<Link to="/"><div className="logoFoot">
							<img src="../imgs/logo.png"/>
          					<span> Compathnion <br/> Technology &nbsp;</span>
          				</div>
          				</Link>
          				<div className="afterlogo"></div>
          				<div className="contact">
          				<a href="mailto:admin@compathnion.com"><img src="../imgs/email.png"/>&nbsp;&nbsp;admin@compathnion.com </a>
          				</div>
					</div>
					<div className="linkage">
						<p><Link to="/about">About us</Link></p>
						<p><Link to="/investor">Investors and partnership</Link></p>
					</div>
					<div className="other">
                		<p><Link to="/cloud"> CLOUD™</Link></p>
						<p><Link to="/track">TRACK™</Link></p>
						<p><Link to="/crowd"> CROWD™</Link> </p>
						<p><Link to="/media">MEDIA</Link></p>
						<p><Link to="/events">EVENTS</Link></p>
					</div>
				</div>
			</div>
			)
	}
}

   