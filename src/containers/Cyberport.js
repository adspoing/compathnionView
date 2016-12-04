// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cyberport extends Component {
    render() {
        
        return (
            <div>
           <div className="container">
		 <div className="title1">Whereami in Cyberport</div>
		   <div className="para1"> 
  <a href="https://play.google.com/store/apps/details?id=mtrec.wherami.cyberport" className="link">Explore our Wherami app in Google Play!</a>         </div>
          <table className="table">
          <tbody>
            <tr><td>Floor Selection</td><td>Current Position</td></tr>
            <tr><td><img src="./imgs/Cyber_Floor Selection.png"/></td>
            <td><img src="./imgs/Cyber_Current_Position.png"/></td></tr>
             <tr><td>Configurable Interface</td><td>Facilities Nearby</td></tr>
            <tr><td><img src="./imgs/Cyber_Configurable_Interface.png"/></td>
            <td><img src="./imgs/Cyber_Facilities_Nearby.png"/></td></tr>
            </tbody>
          </table>
          </div>
          </div>
        )
    }
}
export default connect(
)(Cyberport)