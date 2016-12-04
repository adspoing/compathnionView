// 动态数据
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SlidePic from '../components/PicSlides'

class Track extends Component {
    componentWillMount() {
            window.scrollTo(0,0);   
     }
    render() {
        
        return (
            <div>
            <div className="container">
            <SlidePic/>
               <div className="title1">
                Wherami Track™
                </div>
            <div className="para1"> 
Wherami Track™ is our people tracking system for capturing customer and employee activities inside the store, allowing retailers to better understand their traffic patterns, and empowering in-store marketing, schedule to demand, manage queues, and measure sales conversion. Given today's geopolitical tensions, it goes without saying that Wherami Track™ has very high security application potential. The setup requires mall owners to install our AP devices. There are no special requirement on users' mobile devices except that they need to turn on their WiFi. Wherami Track™ is in currently in beta and will be commercially available by the end of 2016. 
            </div>
            <div className="videoContainer">
            <iframe className="video" src="https://www.youtube.com/embed/sm9Y08IvyUI" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
            </div>
        )
    }
}

// const getList = state => {
//     return {
//         lists: state.update.data
//     }
// }

// <div className="btn-group">
//                     <button type="button" className="btn btn-default" onClick={() => fetchPostsIfNeeded()}>加载数据</button>
//                     <button type="button" className="btn btn-default" onClick={() => refreshData()}>清除数据</button>
//                 </div>
//                 <p></p>
//                 {lists.map((e, index) => 
//                     <div className="well well-sm" key={index}><a href={e.url} target="_blank">{e.title}</a></div>
//                 )}
export default connect(
)(Track)
