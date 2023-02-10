import React, { useState, useLayoutEffect, useEffect, createRef } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SmileOutlined,
  DownOutlined,
} from '@ant-design/icons';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Outlet
} from "react-router-dom";
import { Layout, Menu, theme, Button, Dropdown, Space, Avatar } from 'antd';
import Swiper from './Swiper'
import MyAvatar from './components/MyAvatar'
const { Header, Sider, Content } = Layout;
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Swiper />,
  },
  {
    path: "/about",
    element: <div>about</div>,
  },

]);
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const nav = ({ item, key, keyPath, domEvent }) => {
    console.log(key)
    if (key == 'about') {
      navigate("/about")
    }
    if (key == '2') {
      navigate("/nav2")
    }
    if (key == '3') {
      navigate("/nav3")
    }
  }
  return (
    <Layout id="components-layout-demo-custom-trigger" style={{ minHeight: "100vh" }} >
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="logo">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style={{ height: !collapsed ? '32px' : '32px', marginInlineEnd: !collapsed ? '12px' : '0px' }} />
          {
            !collapsed ? <span>ant-design</span> : null
          }

        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={nav}
          items={[
            {
              key: 'about',
              icon: <UserOutlined />,
              label: '手風琴',
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
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='right-content'>
            <MyAvatar />
            <Dropdown menu={{ items }} className="dropdown">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar shape="circle" size={42} icon={<img src={"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJO1Lia2qKj3yMPpJsyzKRvU34PxOJApicPwLPNN8icY2Tkamopl0CK49qTDu326TAKic670icNeDMMQ6w/132"} alt="avatar" />} />
                </Space>
              </a>
            </Dropdown>

          </div>

        </Header>
        <Content
          style={{
            padding: 12,
            minHeight: "calc(100vh - 64px)",
            background: colorBgContainer,
          }}>
          <Outlet />

        </Content>
      </Layout>
    </Layout>
  );
};

export default App;