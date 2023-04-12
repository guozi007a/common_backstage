import { FC } from 'react';
import styled from 'styled-components';
import { CaretDownFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import headImg from '@/images/head-img.gif';

// const headImg = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80';

const AreaWrap = styled.main`
    position: relative;
    cursor: pointer;    
`
const AvatarWrap = styled.section`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AvatarImg = styled.img.attrs({
    src: headImg,
    alt: 'avatar'
})`
    width: 100%;
    height: 100%;
`
const IconWrap = styled.div`
    position: absolute;
    z-index: 1;
    top: 5px;
    right: -14px;
    color: #d9d9d9;
    font-size: 16px;
`

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.baidu.com">
                个人中心
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/guozia007/common_backstage">
                项目地址
            </a>
        ),
    },
    {
        key: '3',
        label: (
            // <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            //     退出登录
            // </a>
            <Link to='/login' replace={true}>退出登录</Link>
        ),
    },
];

const AvatarArea: FC = () => {

    return <Dropdown menu={{ items }} placement="bottom" arrow
        trigger={['click']}
    >
        <AreaWrap>
            <AvatarWrap>
                <AvatarImg />
            </AvatarWrap>
            <IconWrap>
                <CaretDownFilled />
            </IconWrap>
        </AreaWrap>
    </Dropdown>
}

export default AvatarArea;