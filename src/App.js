import React, { useState, useLayoutEffect, useEffect, createRef } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button } from 'antd';
import Audio from './wavy.mp3'
import AudioComponent from './Audio'
import Swiper from './Swiper'
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const ref = createRef()
  useEffect(() => {
    console.log(ref.current)
  }, [])
  useLayoutEffect(() => {
    console.log(ref.current)

    // ref.current.play()
  }, [])
  return (
    <Layout id="components-layout-demo-custom-trigger" style={{ minHeight: "100vh" }}>
      {/* <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider> */}
      {/* <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header> */}
        {/* <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 1280,
            background: colorBgContainer,
          }} */}
          {/* <AudioComponent ref={ref} src={Audio}></AudioComponent> */}
          <Swiper />
        {/* </Content>
      </Layout> */}
    </Layout>
  );
};

export default App;