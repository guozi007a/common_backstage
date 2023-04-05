import React, { FC, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    YuqueOutlined
} from '@ant-design/icons';
import './index.less';
import { items } from './items';

type NavProp = {
    key: React.Key,
    keyPath: string[],
}

const { Header, Sider, Content } = Layout;


const Home: FC = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState(['index']);
    const navigate = useNavigate();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const rootSubmenuKeys = ['index', 'merchant', 'commodity'];

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const handleClick = ({ key, keyPath }: NavProp) => {
        console.log('点击了key: ', key, '\n点击了KeyPath: ', keyPath);
        navigate(`/${key}`);
    }

    return <>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <YuqueOutlined />
                    <span className="logo_name">飞鸟系统</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={items}
                    onClick={handleClick}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: '100vh',
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </>
}

export default Home;