// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hkust extends Component {
    render() {
        
        return (
            <div>
           <div className="container">
		 <div className="title1">Whereami in HKUST</div>
		   <div className="para1"> 
  <a href="https://play.google.com/store/apps/details?id=wherami.hkust" className="link">Explore our Wherami app in Google Play!</a>         </div>
          <table className="table">
          <tbody>
            <tr><td>Current Location</td><td>Looking for the shortest path</td></tr>
            <tr><td><img src="./imgs/New_Current_Location.png"/></td>
            <td><img src="./imgs/New_Shortest_Path.png"/></td></tr>
             <tr><td>Floor Selection</td><td>Facilities Nearby</td></tr>
            <tr><td><img src="./imgs/New_Floor Selection.png"/></td>
            <td><img src="./imgs/New_Facilities_Nearby.png"/></td></tr>
             <tr><td>Content Search</td><td>Configurable Interface</td></tr>
            <tr><td><img src="./imgs/New_Content_Search.jpg"/></td>
            <td><img src="./imgs/New_Configurable_Interface.png"/></td></tr>
             <tr><td>What's Happening Around Me?</td><td>My Courses</td></tr>
            <tr><td><img src="./imgs/New_Happen_Around_Me.png"/></td>
            <td><img src="./imgs/New_Course.png"/></td></tr>
            </tbody>
          </table>
          </div>
          </div>
        )
    }
}
export default connect(
)(Hkust)