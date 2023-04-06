import React, { FC, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
    keyPath?: string[],
}

const { Header, Sider, Content } = Layout;


const Home: FC = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState(['index']);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    const navigate = useNavigate();
    const loca = useLocation();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // const rootSubmenuKeys = ['index', 'merchant', 'commodity'];

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        // const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        // if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        //     setOpenKeys(keys);
        // } else {
        //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        // }
        setOpenKeys(keys);
    };

    const handleClick = ({ key, keyPath }: NavProp) => {
        // console.log('点击了key: ', key, '\n点击了KeyPath: ', keyPath);
        navigate(`/${key}`);
    }

    useEffect(() => { 
        const path = loca.pathname;
        setSelectedKeys(path.split('/').slice(1));
    }, [loca])

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
                    // 点击切换路由，当前菜单高亮
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={items}
                    onClick={handleClick}
                    // 根据输入路由 选中当前菜单并高亮
                    selectedKeys={selectedKeys}
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