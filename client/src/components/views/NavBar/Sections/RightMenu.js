import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const Upload = require('../../../../assets/images/upload.png');
const Login = require('../../../../assets/images/icon8.png');
const Logout = require('../../../../assets/images/icon7.png');
const Member = require('../../../../assets/images/icon9.png');

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('로그아웃 실패하였습니다.')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="app">
          <a href="/register"><img src={Member} style={{ width: '35px', height: '35px'}}/></a>
        </Menu.Item>
        <Menu.Item key="mail">
          <a href="/login"><img src={Login} style={{ width: '30px', height: '30px'}}/></a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="create">
          <a href="/video/upload"><img src={Upload} alt="Upload" /></a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}><img src={Logout} style={{ width: '30px', height: '30px'}}/></a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

