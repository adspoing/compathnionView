import { Timeline } from 'antd';

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TimeLine extends Component {
 	render(){
		return(
		 <Timeline>
		    <Timeline.Item><a href="#14-12-2015">14-12-2015	 67companies honoured at Hong Kong Awards for Industries</a>	 </Timeline.Item>
			<Timeline.Item><a href="#17-04-2015">17-04-2015   定位無難度 </a></Timeline.Item>
			<Timeline.Item><a href="#16-04-2015">16-04-2015	港推導航app 商場WiFi尋店舖	</a></Timeline.Item>
			<Timeline.Item><a href="#15-04-2015-1">15-04-2015 嶄新物聯網技術 奧海城率先體驗</a></Timeline.Item>
			<Timeline.Item><a href="#15-04-2015-2">15-04-2015 智能手杖／廁所／室內定位 - 香港新科技助長者及障礙人士</a></Timeline.Item>
			<Timeline.Item><a href="#15-04-2015-3">15-04-2015 室內定位系統 手機毋須上網</a></Timeline.Item>
			<Timeline.Item><a href="#15-04-2015-4">15-04-2015 商場Wifi導航助尋店舖</a></Timeline.Item>
			<Timeline.Item><a href="#14-04-2015">14-04-2015 LSCM R&D Centre showcases latest IoT Technologies Contributing to Logistics and Social Services Sector</a></Timeline.Item>
		  	<Timeline.Item><a href="#19-12-2014">19-12-2014 科大兩學者提升手機應用功能</a></Timeline.Item>
		  	<Timeline.Item><a href="#Oct-2014">Oct-2014 Indoor Location Matters</a></Timeline.Item>
		  	<Timeline.Item><a href="#Aug-2014">Aug-2014 Indoor Localisation, Tracking and Navigation</a></Timeline.Item>
		  	<Timeline.Item><a href="#Jun-2014">Jun-2014 Innovating New Business Opportunities 創意﹒創新商機</a></Timeline.Item>
			<Timeline.Item><a href="#01-05-2014">01-05-2014 科大研室內導航助商戶推廣</a></Timeline.Item>
			<Timeline.Item><a href="#29-01-2014">29-01-2014 On the Right Track (Full version)</a></Timeline.Item>
			<Timeline.Item><a href="#02-07-2013">02-07-2013 Insider's view on shopping of tomorrow</a></Timeline.Item>
			<Timeline.Item><a href="#25-06-2013">25-06-2013 On the right track</a></Timeline.Item>
		  </Timeline>
		)
	}
}
