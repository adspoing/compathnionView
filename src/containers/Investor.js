import React, { Component, PropTypes } from 'react' // 引入React
import { connect } from 'react-redux' // 引入connect 
import SlidePic from '../components/PicSlides'

// import List from '../components/List'  // 引入展示组件List

export class  Investor extends Component {
    componentWillMount() {
            window.scrollTo(0,0);   
     }
    render() {
    
        // 通过this.props获取到lists的值
        return(
            <div>
                <div className="container">
                <SlidePic />
              <div className="title1"> Investors and partnership</div>
                <div className="para1"> 
We are commercially deploying Wherami™  and are seeking capitals to ramp up our R&D and expansion. If you are interested in investing our cutting-edge and market leading location based technology, we would love to talk to you. We are especially keen to talk to VC or tech companies from the Silicon Valley.            </div>
            <div className="para2">
            You may download our presentation here:<a href="https://drive.google.com/a/compathnion.com/file/d/0B5l9ZmKh2z05ajlTczM2NmkwODg/view?usp=sharing"> https://drive.google.com/a/compathnion.com/file/d/0B5l9ZmKh2z05ajlTczM2NmkwODg/view?usp=sharing</a>
            </div>
            </div>

            </div>
        )
    }
}


// 利用connect将组件与Redux绑定起来
export default connect()(Investor)