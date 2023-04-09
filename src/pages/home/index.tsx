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
import { items, ItemProp } from './items';
import HomeHead from './HomeHead';
import NavTags from './Tags';
import { BreadItemType } from './types';

type NavProp = {
    key: React.Key,
    keyPath?: string[],
}

const { Header, Sider, Content } = Layout;


const Home: FC = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState(['index']);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [breads, setBreads] = useState<BreadItemType[]>([]);
    const navigate = useNavigate();
    const loca = useLocation();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const rootSubmenuKeys: string[] = [];
    items.forEach(v => rootSubmenuKeys.push(v.key as string));

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    // 点击MenuItem跳转
    const jump = (keyPath: string[]) => {
        const _keyPath: string[] = keyPath.map(v => {
            return v.includes('_') ? v.replace(/.*_/, '') : v;
        })

        const path = '/' + _keyPath.reverse().join('/');
        navigate(path);
    }


    // 头部路由
    const handleBreads = (keyPath: string[]) => {

        const titles: BreadItemType[] = [];

        const getLabel = (arr: ItemProp[], paths: string[]) => {

            const obj = arr.find(v => v.key === paths[0]);
            console.log('obj: ', obj);
            
            titles.push({
                title: obj.label
            });

            if (paths.length > 1) {
                paths.shift();
                getLabel(obj.children, paths);
            }
        }

        getLabel(items, keyPath.reverse());

        setBreads(titles);
    }

    const handleClick = ({ key, keyPath }: NavProp) => {

        console.log('点击了key: ', key, '\n点击了keyPath: ', keyPath);
        
        jump(keyPath);

        handleBreads(keyPath);
    }

    useEffect(() => { 
        const path = loca.pathname;
        const keys = path.split('/').slice(1);
        
        if (keys.length === 1) {
            setSelectedKeys(keys);
        } else if (keys.length > 1) {
            setSelectedKeys([`${keys[0]}_${keys.at(-1)}`]);
        }
        setOpenKeys(keys.reverse());
    }, [loca.pathname])

    return <>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"
                    onClick={() => {navigate('/index')}}
                >
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
                <Header style={{ background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <HomeHead breads={breads} />
                </Header>
                <NavTags />
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