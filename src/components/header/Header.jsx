import React, { Component } from 'react';
import './Header.scss';
import LogoImg from '../../assets/images/logo.png'

import { Row, Col, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      current: 'channel-item',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={LogoImg} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={12}>
            <Menu 
              mode="horizontal" 
              selectedKeys={[this.state.current]}
              onClick={this.handleClick}
            >
              <Menu.Item key="channel-item"><Icon type="appstore" />推荐</Menu.Item>
              <Menu.Item key="channel-hot"><Icon type="appstore" />热点</Menu.Item>
              <Menu.Item key="channel-technology"><Icon type="appstore" />科技</Menu.Item>
              <SubMenu title={<span className="submenu-title-wrapper">
                <Icon type="appstore" />娱乐</span>}>
                <MenuItemGroup>
                  <Menu.Item key="channel-technology1">娱乐1</Menu.Item>
                  <Menu.Item key="channel-technology2">娱乐2</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="channel-game"><Icon type="appstore" />游戏</Menu.Item>
              <Menu.Item key="channel-sports"><Icon type="appstore" />体育</Menu.Item>
              <Menu.Item key="channel-car"><Icon type="appstore" />汽车</Menu.Item>
              <Menu.Item key="channel-finance"><Icon type="appstore" />财经</Menu.Item>
            </Menu>
          </Col>
          <Col span={4} className="loginBtn">
            
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}

export default Header;