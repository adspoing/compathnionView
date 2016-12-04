// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventLine from '../components/EventLine.js'
import Allslides from '../components/Allslides.js'
import { BackTop } from 'antd';
import "../css/event.css"

class Events extends Component {
    render() {
        
        return (

            <div>
              <div className="container">
                 <div className="title1">Events</div>
                 <EventLine />
                  <BackTop />
              </div>
            </div>
        )
    }
}
export default connect(
)(Events)

              // <div className="mask"></div>

 // <div className="allslides">
 //              <Allslides  />
 //              </div>