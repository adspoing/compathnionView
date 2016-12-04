// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SlidePic from '../components/PicSlides'

class Crowd extends Component {
    componentWillMount() {
            window.scrollTo(0,0);   
     }
    render() {
        
        return (
            <div>
           <div className="container">
             <SlidePic/>
		 <div className="title1">Wherami Crowd™</div>
		   <div className="para1"> 
Wherami Crowd™ is our crowd-sourced signature update algorithm currently under research and development. With Wherami Crowd™, mall owners will be able auto update their WiFi, iBeacon BLE, and magnetic fields signatures by leveraging crowd users walking around in the mall using mobile devices.  
          </div>
          </div>
          </div>
        )
    }
}
export default connect(
)(Crowd)