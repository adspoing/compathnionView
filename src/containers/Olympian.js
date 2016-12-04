// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Olympian extends Component {
    render() {
        
        return (
            <div>
           <div className="container">
		 <div className="title1">Whereami in Olympian</div>
		   <div className="para1"> 
  <a href="https://play.google.com/store/apps/details?id=wherami.olympian" className="link">Explore our Wherami app in Google Play!</a>         </div>
          <table className="table">
          <tbody>
            <tr><td>Current Location</td><td>Facilities Nearby</td></tr>
            <tr><td><img src="./imgs/Current_Location.png"/></td>
            <td><img src="./imgs/Facility_Nearby.png"/></td></tr>
             <tr><td>Wild Search</td><td>Category Search </td></tr>
            <tr><td><img src="./imgs/Wild_Search.png"/></td>
            <td><img src="./imgs/Catagory_Search.png"/></td></tr>
              <tr><td>Shop Information</td><td>Navigation 1</td></tr>
            <tr><td><img src="./imgs/Shop_Info.png"/></td>
            <td><img src="./imgs/Navigation01.png"/></td></tr>
             <tr><td>Navigation 2</td><td></td></tr>
            <tr><td><img src="./imgs/Navigation02.png"/></td></tr>
            </tbody>
          </table>
          </div>
          </div>
        )
    }
}
export default connect(
)(Olympian)