// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'

class HKIA extends Component {
    render() {
        
        return (
              <div className="container">
        		     <div className="title1">Trials in HKIA</div>
        		     <div className="para1"> 
                     With strong support from <a target="view_window" href="http://www.hongkongairport.com/eng/business/airport-authority/introduction.html">Airport Authority Hong Kong (AAHK)</a>, we are conducting trials in the <a target="view_window" href="http://www.hongkongairport.com/eng/index.html">Hong Kong International Airport (HKIA) </a>for our indoor localization project.
                    The trial ares included both the restricted area and the public area.
                  </div>
                  <table className="table">
                    <tbody>
                      <tr><td>Restricted Area</td><td>Public Area</td></tr>
                      <tr><td><img src="./imgs/Restricted.JPG"/></td>
                      <td><img src="./imgs/Public.JPG"/></td></tr>
                    </tbody>
                  </table>
                  <div className="para1"> 
                  HKIA is composed of Terminal 1 (with gross floor area 570,000 m²) ,Terminal 2 (140,000 m²) and North Satellite Concourse (20,000 m²). Our trials are mostly carried out in Terminal 1.
                  </div>
                  <div className="para1"> 
                    The challenges that we face in these trials are:
                    <ul className="hkia_ul">
                          <li>The trial area is immense</li>
                          <li>Wi-Fi environment is noisy</li>
                          <li>Dynamic crowds significantly affect Wi-Fi signals</li>
                          <li>Wi-Fi blind spots</li>
                    </ul>
                    </div>
              </div>
        )
    }
}
export default connect(
)(HKIA)