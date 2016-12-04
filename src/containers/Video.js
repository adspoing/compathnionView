// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Video extends Component {
    render() {
        
        return (
              <div className="container">
        		     <div className="title1">Videos</div>
        		     <div className="para1"> 
                 <a href="https://www.youtube.com/watch?v=IQUtrkOiyY8">Wherami demo at Olympian City</a>
                 <div className="videoContainer">
                      <iframe className="video"  src="https://www.youtube.com/embed/IQUtrkOiyY8" frameBorder="0" allowFullScreen></iframe>
                 </div>
                </div>
                <div className="para1"> 
                 <a href="http://www.youtube.com/watch?v=o-KJNUJ81Wg">Demo in Hong Kong International Airport</a>
                 <div className="videoContainer">
                      <iframe className="video"  src="https://www.youtube.com/embed/o-KJNUJ81Wg" frameBorder="0" allowFullScreen></iframe>
                 </div>
                </div>
                <div className="para1"> 
                 <a href="http://www.youtube.com/watch?v=hMu33v3oBGc">Demo in The Hong Kong University of Science and Technology</a>
                 <div className="videoContainer">
                      <iframe className="video"  src="https://www.youtube.com/embed/hMu33v3oBGc" frameBorder="0" allowFullScreen></iframe>
                 </div>
                </div>
              </div>
        )
    }
}
export default connect(
)(Video)