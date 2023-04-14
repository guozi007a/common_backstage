import { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SwitchLang from '@/pages/login/SwitchLang';
import AvatarArea from './AvatarArea';
import { BreadItemType } from './types';
import AliIcon from '@/components/AliIcon';
import { items } from './items';

type BreadProp = {
    breads: BreadItemType[]
}

const HeadWrap = styled.header`
    flex: 1;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    user-select: none;
`;
const RouteText = styled.div`
    font-size: 14px;
    color: #000;
    display: flex;
    align-items: center;
`;
const OperWrap = styled.section`
    display: flex;
    gap: 10px;
    align-items: center;
`
const InpWrap = styled.div`
    position: relative;
`  
const SearchWrap = styled.div`
    position: absolute;
    top: 5px;
    left: -25px;
    color: #989595;
    font-size: 26px;
    font-weight: 700;
    cursor: pointer;
`;
const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Search'
})`
    width: 0px;
    height: 30px;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: none;
    outline: none;
    transition: width .2s linear;

    &.spread {
        width: 220px;
        transition: width .2s linear;
    }
`;
const MessageWrap = styled.section.attrs({
    title: '新的消息'
})`
    position: relative;
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
`
const MessageDot = styled.span`
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 0px;
    display: inline-block;
    min-width: 16px;
    height: 16px;
    line-height: 16px;
    box-sizing: border-box; 
    padding: 0 6px;
    font-size: 14px;
    color: #fff;
    background-color: red;
    border-radius: 8px;
    user-select: none;
`
const TreeWrap = styled.main`
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, .12);
    border-radius: 6px;
    user-select: none;

    .child {
        height: 24px;
        line-height: 24px;
        cursor: pointer;
        margin: 2px;

        &:hover {
            background-color: rgba(0, 0, 0, .2);
        }
    }
`
const TreeChild0 = styled.p.attrs({
    className: 'child'
})`
    font-size: 18px;
`
const TreeChild1 = styled.p.attrs({
    className: 'child'
})`
    font-size: 16px;
    box-sizing: border-box;
    padding-left: 24px;
`
const TreeChild2 = styled.p.attrs({
    className: 'child'
})`
    font-size: 14px;
    box-sizing: border-box;
    padding-left: 48px;
`


const HomeHead: FC<BreadProp> = (props: BreadProp) => {

    const { breads } = props;

    const inputRef = useRef(null);
    const [isSpreadInput, setIsSpreadInput] = useState(false);
    const [searchVal, setSearchVal] = useState('');

    const handleBlur = () => {
        
        inputRef.current && inputRef.current.blur();
        setIsSpreadInput(false);

        if (searchVal) {
            setSearchVal('');
        }
    }

    useEffect(() => { 
        document.addEventListener('click', handleBlur);

        return () => {
            document.removeEventListener('click', handleBlur);
        }
    }, [])

    return <HeadWrap>
        <RouteText>
            <Breadcrumb
                items={breads}
            />
        </RouteText>
        <OperWrap>
            <InpWrap
                onClick={(e: React.SyntheticEvent) => {e.stopPropagation()}}
            >
                <SearchWrap
                    onClick={() => {
                        setIsSpreadInput(!isSpreadInput);
                        isSpreadInput || inputRef.current.focus();

                        if (searchVal) {
                            setSearchVal('');
                        }
                    }}
                >
                    <SearchOutlined />
                </SearchWrap>
                <Input ref={inputRef}
                    className={`${isSpreadInput ? 'spread' : ''}`}
                    value={searchVal}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchVal(e.target.value);
                    }}
                />
                <TreeWrap>
                    {
                        items.map((v, i) => {
                            return <TreeChild0 key={v.key}>
                                {v.label}
                            </TreeChild0>
                        })
                    }
                </TreeWrap>
            </InpWrap>
            <SwitchLang />
            <MessageWrap>
                <AliIcon icon='icon-xiaoxi' styles={{color: 'rgb(64, 199, 196)', fontSize: '40px'}} />
                <MessageDot>8</MessageDot>
            </MessageWrap>
            <AvatarArea />
        </OperWrap>
    </HeadWrap>
}

export default HomeHead;