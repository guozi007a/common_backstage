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
import NavTags from './NavTags';
import { BreadItemType, TagProp } from './types';

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
    const [tagList, setTagList] = useState<TagProp[]>([]);
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
            
            titles.push({
                title: obj.label,
                text: obj.label
            });

            if (paths.length > 1) {
                paths.shift();
                getLabel(obj.children, paths);
            }
        }

        getLabel(items, keyPath.reverse());

        setBreads(titles);

        // nav的tag

        const isHasText = tagList.some(v => v.text === titles.at(-1).text);

        if (!isHasText) {
            const tag: TagProp = {
                path: keyPath[0] === 'index'
                    ? keyPath[0]
                    : keyPath[0].replace(/_/g, '/'),
                color: '',
                text: titles.at(-1).text
            };

            const list = [
                ...tagList,
                tag
            ];

            setTagList(list);
        }

    }

    const handleClick = ({ key, keyPath }: NavProp) => { // eslint-disable-line

        // console.log('点击了key: ', key, '\n点击了keyPath: ', keyPath);
        
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
        
        // 拼接出keyPath
        if (keys.length === 1) {
            handleBreads(keys);
        } else {
            const connectKeys: string[] = keys.reverse().map((v, i) => {
                if (i === 0) {
                    return v;
                } else {
                    return keys[0] + '_' + v;
                }
            })
            
            handleBreads(connectKeys.reverse());
        }
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
                <NavTags tagList={tagList} setTagList={setTagList} />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
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