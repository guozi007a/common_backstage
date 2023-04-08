import { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SwitchLang from '@/pages/login/SwitchLang';
import AvatarArea from './AvatarArea';

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
        width: 200px;
        transition: width .2s linear;
    }
`;


const HomeHead: FC = () => {

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
            {/* <span>首页</span>
            <Bias>/</Bias>
            <span className='disable'>面板</span> */}
            <Breadcrumb
                items={[
                    {
                        title: 'Home',
                    },
                    {
                        title: <a href="">Application Center</a>,
                    },
                    {
                        title: <a href="">Application List</a>,
                    },
                    {
                        title: 'An Application',
                    },
                ]}
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
            </InpWrap>
            <SwitchLang />
            <AvatarArea />
        </OperWrap>
    </HeadWrap>
}

export default HomeHead;