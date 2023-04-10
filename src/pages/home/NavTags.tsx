import { FC, useState, useEffect } from 'react';
import { Tag, Space } from 'antd';
import styled from 'styled-components';
import { TagProp } from './types';
import { useLocation, useNavigate } from 'react-router-dom';

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

    console.log('props: ', props);
    const [currentPath, setPath] = useState('');
    const loca = useLocation();
    const navigate = useNavigate();

    useEffect(() => { 
        const url = location.pathname;
        setPath(url);
        
    }, [loca.pathname])
    
    return <NavWrap>
        <Space size={[0, 8]} wrap>
            {
                props.tagList.map((v) => {
                    return <Tag
                        key={v.path}
                        color={('/' + v.path) === currentPath ? 'green' : '#cccdcd'}
                        closable
                        onClick={() => {navigate(v.path)}}
                    >{v.text}</Tag>
                })
            }
        </Space>
    </NavWrap>
}

export default NavTags;