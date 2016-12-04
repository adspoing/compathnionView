import { Carousel } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class PicSlides extends Component {
	render(){
		return(
			  <div className="PicSlides">
			  <Carousel autoplay>
			    <div className="imgContent"><img src="./imgs/1.jpg"/></div>
			    <div className="imgContent"><img src="./imgs/2.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/3.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/4.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/Cyber01.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/Cyber02.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/HKIA00.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/HKIA01.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/HKIA02.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/HKIA03.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/HKUST01.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/HKUST02.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/IMG-20151215-WA0012.jpg"/></div>
			   <div className="imgContent"><img src="./imgs/LBS1_eng.png"/></div>
			   <div className="imgContent"><img src="./imgs/Oly01.jpg"/></div>
			  </Carousel>	
			  </div>
			)
	}
}

   