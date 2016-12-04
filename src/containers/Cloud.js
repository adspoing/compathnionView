import React, { Component, PropTypes } from 'react' // 引入React
import { connect } from 'react-redux' // 引入connect 
import SlidePic from '../components/PicSlides'

// import List from '../components/List'  // 引入展示组件List

export class  Cloud extends Component {
    componentWillMount() {
            window.scrollTo(0,0);   
     }
    render() {
    
        // 通过this.props获取到lists的值
        const { lists } = this.props

        return(
            <div>
                <div className="container">
                <SlidePic />
              <div className="title1"> Wherami Cloud™</div>
                <div className="para1"> 
Wherami Cloud™ is a cloud based system that lets venue owners (e.g. shopping mall owners) upload their floorplans, label objects on the floorplans, and align the floorplans with actual site on GoogleMap. Once venue owners have uploaded their floorplans, they can use a mobile device running our site survey mobile app to collect WiFi and iBeacon BLE fingerprints of their venues and submit them to system. The fingerprints will then be processed and stored on our fingerprint server. Users may later be able to query our fingerprint server using simple restful calls. Our fingerprint server takes a vector of  WiFi/iBeacon BLE signatures and returns a Google Place Id, floor number, and x, y coordinations of the device inside the site. The setup does not require venue owners to install any customized WiFi or iBeacon devices; it only uses wireless signals from existing wireless infrastructure. Of course the more WiFi or iBeacon devices in the existing environment, the more accurate our fingerprint server can pin-point the location of a mobile device. One of the applications of such system is to send context-aware information to user mobile devices. Mobile developers can build mobile apps around the Wherami Cloud™ ecosystem using our APIs. Wherami Cloud™ is in currently in beta and will be commercially available by the end of 2016. 
            </div>
            <div className="videoContainer">
            <iframe className="video" src="https://www.youtube.com/embed/2Z37lUdYFb4" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="videoContainer">
            <iframe className="video" src="https://www.youtube.com/embed/pftItkXd2Wc" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
            </div>
        )
    }
}

// 验证组件中的参数类型
Cloud.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

// 获取state中的lists值
const getList = state => {
    return {
        lists: state.update.lists
    }
}

// 利用connect将组件与Redux绑定起来
export default connect(getList)(Cloud)