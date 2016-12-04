import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router' // 引入Link处理导航跳转
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends Component {
  render() {
    return (
        <div className="layout-header">
          <Link to="/"><div className="layout-logo">
          <img src="./imgs/logo.png"/>
          <span> Compathnion <br/> Technology &nbsp;</span>
          </div>
          </Link>

          <Menu 
              mode="horizontal"
              >
              <Menu.Item key="home">
                <Link to="/">HOME</Link>
              </Menu.Item>
              <Menu.Item key="cloud">
                <Link to="/cloud"> <span> CLOUD™</span></Link>
              </Menu.Item>
              <Menu.Item key="track">
                  <Link to="/track">
                      <span>TRACK™</span> 
                  </Link>      
               </Menu.Item>
               <Menu.Item key="crowd">
                      <Link to="/crowd"> <span>CROWD™ </span></Link> 
               </Menu.Item>
               <SubMenu title={<span>SITES™ </span>}>
                  <Menu.Item key="SITES:1"><Link to="/wherami_in_hkust">WHERAMI IN HKUST </Link></Menu.Item>
                  <Menu.Item key="SITES:2"><Link to="/wherami_in_cyberport">WHERAMI IN CYBERPORT</Link></Menu.Item>
                  <Menu.Item key="SITES:3"><Link to="/wherami_in_olympian">WHERAMI IN OLYMPIAN CITY</Link></Menu.Item>
                  <Menu.Item key="SITES:4"><Link to="/trials_in_hkia">WHERAMI IN HKIA</Link></Menu.Item>
              </SubMenu>
              <SubMenu title={<span>ACTIVITIES</span>}>
                  <Menu.Item key="ACTIVITIES:1"><Link to="/media">MEDIA</Link></Menu.Item>
                  <Menu.Item key="ACTIVITIES:2"><Link to="/events">EVENTS</Link></Menu.Item>
                  <Menu.Item key="ACTIVITIES:3"><Link to="/video_channel">VIDEO CHANNEL</Link></Menu.Item>
              </SubMenu>
              <Menu.Item key="aa">
                  <Link to="/investor"><span>INVESTORS </span></Link>
              </Menu.Item>
              <SubMenu title={<span>ABOUT US</span>}>
                  <Menu.Item key="setting:1"><Link to="/about">OUR TEAM</Link></Menu.Item>
                  <Menu.Item key="setting:3"><Link to="/contact">CONTACT</Link></Menu.Item>
              </SubMenu>
        </Menu>
      </div>
    );
  }
}


