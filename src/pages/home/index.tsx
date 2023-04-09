import React, { FC, useState, useEffect, ReactElement } from "react";
import { Outlet, useNavigate, useLocation, Link, LinkProps } from "react-router-dom";
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

    // 查找label
    const recurrenceItem = (arr: ItemProp[], v: string) => {
        for (let i = 0; i < arr.length; i++) {
            
            if (arr[i].key === v) {
                return arr[i].label;
            }
        }
    }

    // 头部路由
    const handleBreads = (keyPath: string[]) => {

        const path = keyPath.reverse();
        let breadList: BreadItemType[] = [];

        
        if (path.length === 1) {
            breadList = [{
                title: recurrenceItem(items, path[0])
            }];
        } else {
            breadList = path.map((v, i) => {
                // if (i === path.length - 1 || !v.includes('_')) {
                //     return {
                //         title: ''
                //     }
                // } else {
                //     return {
                //         title: <Link to={`/${v.replace(/_/g, '/')}`}>{''}</Link>
                //     }
                // }
                if (i === 0) {
                    return {
                        title: recurrenceItem(items, v)
                    }
                } else if (i === path.length - 1) {
                    
                }
            })
        }
        console.log('breadList: ', breadList);
        

        setBreads(breadList);
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