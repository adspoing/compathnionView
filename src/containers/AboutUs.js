// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../css/about.css"

class AboutUs extends Component {
    render() {
        
        return (
              <div className="container">
        		     <div className="title1">Our Team</div>
                 <div className="title3">Founder</div>
                 <div className="title4"><a href="http://www.cs.ust.hk/~gchan/">Prof. Gary Chan</a></div>
        		     <div className="para1"> 
Prof Gary Chan is a Professor in <a href="http://www.ust.hk">The Hong Kong University of Science and Technology (HKUST)</a>. His research interests include multimedia streaming, Wi-Fi and wireless networks, indoor localization and mobile computing, big data and user analytics, IT entrepreneurship.
Gary obtained PhD in Electrical Engineering, minor in Business Administration from <a href="http://www.stanford.edu/">Stanford University </a>(1999 ), MSE in Electrical Engineering from  <a href="http://www.stanford.edu/">Stanford University</a> (1994) and BSE in Electrical Engineering from <a href="http://www.princeton.edu/main/"> Princeton University </a>(1993).
                  </div>
                   <div className="title4">Dr Zheng Yi</div>
                  <div className="para1">
Dr Zheng Yi has worked for over 25 years both financial companies and academic institutions as technical lead developer. She joined HKUST MTrec team in Jan 2011 and has managed the team on the development of Whermai technology.
 
Zheng Yi receives her PhD in Computer Science  from <a href="https://www.kent.ac.uk"> University of Kent </a>(1994). She had BSc in Computer Science from <a href="http://www.nju.edu.cn">Nanjing University</a> (1985) and she had her post graduate studies at the <a href="http://www.cas.cn"> Chinese Academy of Science</a>, China.

                  </div>
                  <div className="title3">Our Team</div>
                  <img className="teamPic" src="./imgs/01_Oly.jpg"/>
              </div>

        )
    }
}
export default connect(
)(AboutUs)