import React,{ useState } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
}


const items = [
    getItem('DeshBoard', '1', <PieChartOutlined />),
    getItem('Product', 'sub1', <UserOutlined />, [
        getItem('All Products', '2'),
        getItem('All Category', '3'),
        getItem('All Variations', '4'),
      ]),
    getItem('Orders', 'sub2', <UserOutlined />, [
      getItem('Tom', '6'),
      getItem('Bill', '7'),
      getItem('Alex', '8'),
    ]),
    getItem('Team', 'sub3', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];



const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>

        </>
    )
}

export default Sidebar