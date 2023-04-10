import { FC } from 'react';
import { Tag, Space } from 'antd';
import styled from 'styled-components';
import { TagProp } from './types';
import { Link } from 'react-router-dom';

type NavProp = {
    tagList: TagProp[]
}

const NavWrap = styled.nav`
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box; 
    padding: 0 20px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
`

const NavTags: FC<NavProp> = (props: NavProp) => {

    return <NavWrap>
        <Space size={[0, 8]} wrap>
            {/* <Tag color="magenta" closable>magenta</Tag>
            <Tag color="red" closable>red</Tag>
            <Tag color="volcano" closable>volcano</Tag>
            <Tag color="orange" closable>orange</Tag>
            <Tag color="gold" closable>gold</Tag>
            <Tag color="lime" closable>lime</Tag>
            <Tag color="green" closable>green</Tag>
            <Tag color="cyan" closable>cyan</Tag>
            <Tag color="#87d068" closable>blue</Tag>
            <Tag color="geekblue" closable>geekblue</Tag>
            <Tag color="purple" closable>purple</Tag> */}
            {
                props.tagList.map((v) => {
                    return <Link to={v.path} key={v.path}>
                        <Tag color={v.color} closable>{v.text}</Tag>
                    </Link>
                })
            }
        </Space>
    </NavWrap>
}

export default NavTags;