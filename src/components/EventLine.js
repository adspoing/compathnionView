import { Timeline } from 'antd';

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class EventLine extends Component {
 	render(){
		return(
			  <Timeline>
			    <Timeline.Item><span className="title5">2016 LSCM Road Show</span>
			    		<div><div className="para1"> 
							2016-03-17: The LSCM Roadshow aims to promote the latest robotics and automation development to both the industry and general public, with objectives of promoting the latest LSCM’s technology applications including robotics and automation among the general public, as well as providing an opportunity for the industry players to showcase their technology strengths.
						</div></div>
			    <div className="clearfix">
				    <div className="eventContainer">
					    <div className="imgContainer">
					    	<img src="../imgs/robert.jpg"/>
					    </div>
					   	<div className="imgContainer">
					    	<img src="../imgs/yz.jpg"/>
					    </div>
				    </div>
			    </div>
			    </Timeline.Item>
			    <Timeline.Item>
			    	<span className="title5">2015 Hong Kong Awards for Industries</span>
			    	<div><div className="para1"> 
2015-12-14: The Hong Kong Awards for Industries (HKAI) is championed by the Government. It aims to recognise the outstanding achievements of Hong Kong enterprises in pursuit of high technology and high value-added activities, and to commend excellence in various aspects of their performance.  A total of 294 entries were received. The winners were chosen by the final judging panels chaired by Professor Joseph Sung. 67 companies were honoured at the 2015 HKAI presentation ceremony, at which the Financial Secretary, Mr John C Tsang, officiated.
						</div></div>
						<div className="clearfix">
				    <div className="eventContainer2">
					    <div className="imgContainer2">
					    	<img src="../imgs/15_All_Winners_of_Innovation_and_Creativity.jpg"/>
					    </div>
					   	<div className="imgContainer2">
					    	<img src="../imgs/logo300dpi.jpg"/>
					    </div>
				    </div>
			    </div>
			    </Timeline.Item>
			    <Timeline.Item><span className="title5">2015 LSCM Logistic Summit</span>
			    			    	<div><div className="para1"> 
			    			    	2015-10-20, Hong Kong: The LSCM Logistics Summit 2015 shed light on various LBS technologies and scope of application. The summit featured a number of high-profile industry leading speakers and distinguished professors from the fields of logistics, supply chain management and LBS, to share their insights and best practices. Prof Gary Chan was invited as a guest speaker in the technology seminar, with the topic "Indoor Positioning Based on Wireless Fingerprinting Technologies".
						</div></div>
					<div className="clearfix">
				    <div className="eventContainer2">
					    <div className="imgContainer2">
					    	<img src="../imgs/LogSum01-15.jpg"/>
					    </div>
					   	<div className="imgContainer2">
					    	<img src="../imgs/LogSum02-15.jpg"/>
					    </div>
				    </div>
			    </div>
			    </Timeline.Item>
			    <Timeline.Item>
			    <span className="title5">2015 ITF Projects Commercialisation Workshop</span>
			    	<div><div className="para1"> 
						2015-04-23, Hong Kong: To allow local entrepreneurs exploit the full commercial potential of leading local innovations and to update local trades with the latest technological advancements, HKSTPC and Isis jointly hosted a series of workshops. Prof Gary Chan was invited to share his experience in the topic "Advanced Indoor Locating System".						</div></div>
					<div className="clearfix">
				    <div className="eventContainer3">
					    <div className="imgContainer3">
					    	<img src="../imgs/ITF_workshop01.jpg"/>
					    </div>
					   	<div className="imgContainer4">
					    	<img src="../imgs/ITF_workshop02.jpg"/>
					    </div>
				    </div>
			    </div>
			    </Timeline.Item>
			    <Timeline.Item>
			    <span className="title5">2015 ICT Expo</span>
			    	<div><div className="para1"> 
						2015-04-13 - 2015-04-16, Hong Kong: This event provided an opportunity for ICT providers to meet world enterprises and Hong Kong SMEs for business, which attracted over 31,000 buyers from different industires who are looking for the latest ICT solutions. Being one of the exhibitors, Wherami team introduced the technologies on real-time positioning and navigation, location-based targeted services and socializing on smartphones.				
					</div></div>
					<div className="clearfix">
				    <div className="eventContainer3">
					    <div className="imgContainer3">
					    	<img src="../imgs/ICT_expo2015_1.jpg"/>
					    </div>
					   	<div className="imgContainer4">
					    	<img src="../imgs/ICT_expo2015_2.jpg"/>
					    </div>
				    </div>
			    </div>
			    </Timeline.Item>
			    <Timeline.Item>
			     <span className="title5">2015 Science-for-Lunch</span>
			    	<div><div className="para1"> 
						2015-03-26, Hong Kong: HKUST Science-for-Lunch is a town-and-grown event to share the scientific discovery and innovative technologies of HKUST professors with the community. Prof Gary Chan was invited to give a presentation on the topic: Indoor Position - Opportunities and Technologies for a New Age.			
					</div></div>
					<div className="clearfix">
				    <div className="eventContainer6">
					    <div className="imgContainer6">
					    	<img src="../imgs/SFL2015.jpg"/>
					    </div>
				    </div>
			    </div></Timeline.Item>
			    <Timeline.Item>
			    <span className="title5">2014 APAC Innovation Summit</span>
			    	<div><div className="para1"> 
			    	2014-12-02, Hong Kong: The summit brought together representatives from the government, academia, research and development, finance and related industries to learn and exchange views on current challenges and opportunities for Asian innovation. Prof Gary Chan was invited to give a presentation on Wi-Fi Indoor Positioning: Opportunities, Technologies and Deployment Trials in Internet of Things (IoT) programme.
					</div></div>
					<div className="clearfix">
				    <div className="eventContainer2">
					   <div className="imgContainer2">
					    	<img src="../imgs/APAC2014-01.jpg"/>
					    </div>
					   	<div className="imgContainer2">
					    	<img src="../imgs/APAC2014-02.jpg"/>
					    </div>
				    </div>
			    </div>
			    </Timeline.Item>
			    <Timeline.Item>
			    <span className="title5">2014 Guangdong-Hong Kong IoT Technology Application Summit</span>
			    	<div><div className="para1"> 
			    	2014-10-13, Guangzhou, China: The forum was organized by The Economic & Information Commission of Guangdong Province and The Office of the Government Chief Information Officer, HKSAR. Around 300 participants attended the forum. Prof Gary Chan was invited to give a presentation on R&D results of Wherami technology, with the topic "Indoor Localization, Tracking and Navigation for an Intelligent City".
					</div></div>
					<div className="clearfix">
				    <div className="eventContainer2">
					   <div className="imgContainer2">
					    	<img src="../imgs/GDHKIOT2014-01.jpg"/>
					    </div>
					   	<div className="imgContainer2">
					    	<img src="../imgs/GDHKIOT2014-02.jpg"/>
					    </div>
				    </div>
			    </div></Timeline.Item>
			    <Timeline.Item>
			    <span className="title5">2014 LSCM Logistics Summit</span>
			    	<div><div className="para1"> 
					2014-09-18, Hong Kong: The summit gathered government officials, industry leaders, representatives of academia and research institutions to share the latest market information and explore new business opportunities in Internet of Things (IoT) Technology. Prof Gary Chan was invited as a speaker in the technology seminar, with the topic "Smart Wi-Fi Positioning System for Indoor Navigation".
					</div></div>
					<div className="clearfix">
				    <div className="eventContainer2">
					   <div className="imgContainer2">
					    	<img src="../imgs/LogSum01-14.jpg"/>
					    </div>
					   	<div className="imgContainer2">
					    	<img src="../imgs/LogSum02-14.jpg"/>
					    </div>
				    </div>
			    </div></Timeline.Item>
			    <Timeline.Item>
			    <span className="title5">2014 Internet of Things (IOT) Symposium</span>
			    	<div><div className="para1"> 
			    		2014-04-17, Hong Kong: This symposium focuses on the application of Internet of Things (IoT) and explores its transformational potentials. Prof Gary Chan was invited to give a presentation on Indoor GPS: Opportunities and Technologies.
					</div></div>
					<div className="clearfix">
				    <div className="eventContainer3">
					    <div className="imgContainer3">
					    	<img src="../imgs/IOT2014_1.jpg"/>
					    </div>
					   	<div className="imgContainer4">
					    	<img src="../imgs/IOT2014_2.jpg"/>
					    </div>
				    </div>
			    </div>
			    </Timeline.Item>
			    <Timeline.Item>
			    <span className="title5">2014 Venture Entrepreneurship Festival</span>
			    	<div><div className="para1"> 
			    		2014-05-02, Hong Kong: Wherami team was being invited as one of the participants in the showcase of this fruitful event.
					</div></div>
					<div className="eventVideoContainer">
					    <iframe width="560" height="315" src="https://www.youtube.com/embed/9khchAr6_3Y" frameBorder="0" allowFullScreen></iframe>
					</div>
			    </Timeline.Item>
			    <Timeline.Item>
					<span className="title5"> 2014 Hong Kong Awards for Industries: Innovation and Creativity</span>
			    	<div><div className="para1"> 
			    	2014-04-30, Hong Kong: This event aims to promote a culture of innovation & creativity among business sectors, and recognize the achievements of outstanding industries. Prof Gary Chan was invited to give a presentation on Indoor GPS: Opportunities and Technologies. 
					</div></div>
					<div className="clearfix">
				    <div className="eventContainer2">
					   <div className="imgContainer2">
					    	<img src="../imgs/HKAI2014_1.jpg"/>
					    </div>
					   	<div className="imgContainer2">
					    	<img src="../imgs/HKAI2014_2.jpg"/>
					    </div>
				    </div>
			    </div>
			   </Timeline.Item>
			  </Timeline>
   		)
   	}
}