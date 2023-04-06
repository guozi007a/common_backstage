import { FC } from 'react';
import { Tag, Space } from 'antd';
import styled from 'styled-components';

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

const NavTags: FC = () => {

    return <NavWrap>
        <Space size={[0, 8]} wrap>
            <Tag color="magenta" closable>magenta</Tag>
            <Tag color="red" closable>red</Tag>
            <Tag color="volcano" closable>volcano</Tag>
            <Tag color="orange" closable>orange</Tag>
            <Tag color="gold" closable>gold</Tag>
            <Tag color="lime" closable>lime</Tag>
            <Tag color="green" closable>green</Tag>
            <Tag color="cyan" closable>cyan</Tag>
            <Tag color="blue" closable>blue</Tag>
            <Tag color="geekblue" closable>geekblue</Tag>
            <Tag color="purple" closable>purple</Tag>
        </Space>
    </NavWrap>
}

export default NavTags;