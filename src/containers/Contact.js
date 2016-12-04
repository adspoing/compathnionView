// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Contact extends Component {
    render() {
        
        return (
              <div className="container">
        		     <div className="title1">Contact Us</div>
        		     <div className="para1"> 
                  
                <p>Compathnion Technology Limited</p>
                 <p>Unit 321B, 3/F, Core Building 2, </p>
                 <p>No. 1 Science Park West Avenue, </p>
                 <p>Hong Kong Science Park, </p>
                 <p>Shatin, N.T., Hong Kong</p>
                 <p><a href="info@compathnion.com">info@compathnion.com</a></p>
                 <p>(852) 9779 5510</p>
                 <p><a href="http://www.compathnion.com/">http://www.compathnion.com/</a></p>
                 </div>
              </div>
        )
    }
}
export default connect(
)(Contact)