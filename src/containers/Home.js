// 计数器
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { increase, decrease } from '../actions/count'
import "../css/main.css"
import SlidePic from '../components/PicSlides'
class Home extends Component {
     componentWillMount() {
            window.scrollTo(0,0);   
     }
    render() {
        return (
            <div>
                 <div className="container">
                    <SlidePic/>
                    <div className="title1">What is Location Based Service?</div>
                    <div className="para1"> 
                    Being in the right place creates a lot of business opportunities. 
                    This is because different services can be provided depending on where you are.
                     This is called location-based services (LBS). It requires technologies on localization (knowing one's position), tracking (learning one's position over time), and navigation (guiding one from one place to another). Despite of much success of outdoor LBS based on Global Positioning System (GPS),  LBS is still in its infancy.
                     </div>
                    <div className="para1"> 
                        <b>Compathnion Technology</b> is a startup company with core teams from the <a href="http://www.ust.hk" className="link">Hong Kong University of Science and Technology </a> which has significant achievements in developing innovative indoor localization technologies. Compathnion delivers the cost-effective product wherami, a software suite which offers business positioning solution making use of various handheld sensors (Wi-Fi, iBeacon BLE, magnetic fields, dead-reckoning/INS, etc.) to enable highly accurate localization, navigation, asset tracking and user behaviour analytics. wherami has gone through successful trials in airport, shopping malls, hospitals, exhibition centres, university campus, etc. 
                    </div>
                    <div className="title1">How does wherami work?</div>
                    <div className="content">
                        <div className="text">
                            <div className="title2">Mobile location</div>
                            <div className="para1"> 
                            Your mobile phone will answer these questions for you: Where am I? What is around me? How can I get there? It will be fun to let your mobiles to guide you around.
                            </div>
                        </div>
                        <img className="img1" src="./imgs/mobile_location.jpg" />
                    </div>
                    <div className="content">
                        <div className="text">
                            <div className="title2">Create site contents</div>
                            <div className="para1">
                            The site will be distinguished with its site name and logo. Upload the site map, WiFi fingerprint and points of interest via Wherami cloud-based content server, the system will be ready for use. Any updates will be reflected to the client app instantly.
                            </div>
                        </div>
                        <img className="img1" src="./imgs/create_site_contents.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
)(Home)