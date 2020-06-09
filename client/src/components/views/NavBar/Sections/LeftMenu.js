import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">홈</a>
    </Menu.Item>

    <Menu.Item key="Landing">
      <a href="/blackbox">블랙박스</a>
    </Menu.Item>

    <Menu.Item key="subscription">
      <a href="/calorie">칼로리</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu