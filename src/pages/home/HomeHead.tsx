import { FC, useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SwitchLang from '@/pages/login/SwitchLang';
import AvatarArea from './AvatarArea';
import { BreadItemType } from './types';
import AliIcon from '@/components/AliIcon';
import { items, ItemProp } from './items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

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
    padding: 20px 0;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, .12);
    border-radius: 6px;
    user-select: none;

    &.hide {
        display: none;
    }

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
const TreeNoData = styled.p`
    text-align: center;
    font-size: 18px;
    color: gray;
`
const TreeMain = styled.section`
    position: relative;
    width: 100%;
    height: 155px;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 24px;
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
    const [searchResult, setSearchResult] = useState([]);

    const handleBlur = () => {
        
        inputRef.current && inputRef.current.blur();
        setIsSpreadInput(false);

        if (searchVal) {
            setSearchVal('');
        }
    }

    // 遍历items 导出相关的路由
    const _getRouteList = (searchVal: string) => {

        const result: ItemProp[] = [];

        if (!searchVal) {
            setSearchResult(result);
            return;
        }

        items.forEach(v => {
            if (v.label.includes(searchVal) || searchVal.includes(v.label)) {
                result.push(v);
            } else {
                if (v.children) {
                    v.children.forEach(_v => {
                        if (_v.label.includes(searchVal) || searchVal.includes(_v.label)) {
                            
                            const r: ItemProp = {
                                key: v.key,
                                icon: v.icon,
                                label: v.label
                            };
                            
                            const isExist = result.some(value => value.key === r.key);

                            if (isExist) {
                                r.children.push(_v);
                            } else {
                                r.children = [_v];
                            }

                            result.push(r);
                        }
                    })
                }
            }
        })
        
        setSearchResult(result);
    }

    // 在react中使用lodash的debounce，需要使用useCallback确保抖动函数是唯一的，不然抖动函数无效
    const getRouteList = useCallback(debounce((searchVal: string) => _getRouteList(searchVal), 250), []);


    useEffect(() => { 
        document.addEventListener('click', handleBlur);

        return () => {
            document.removeEventListener('click', handleBlur);
        }
    }, [])

    useEffect(() => { 
        getRouteList(searchVal);
    }, [searchVal])


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
                {
                    searchVal
                        ? <TreeWrap className={`${isSpreadInput ? '' : 'hide'}`}>
                            {
                                searchResult.length
                                    ? <TreeMain>
                                        <Scrollbars autoHide>
                                            {
                                                searchResult.map((v: ItemProp) => {
                                                    return <div key={v.key}>
                                                        <TreeChild0>
                                                            {
                                                                v.key + '' === 'index'
                                                                    ? <Link to={'/' + v.key}
                                                                        onClick={handleBlur}
                                                                    >{v.label}</Link>
                                                                    : <span>{v.label}</span>
                                                            }
                                                        </TreeChild0>
                                                        {
                                                            v.children && v.children.map(_v => {
                                                                return <div key={_v.key}>
                                                                    <TreeChild1>
                                                                        <Link to={'/' + (_v.key as string).replace(/_/g, '/')}
                                                                            onClick={handleBlur}
                                                                        >{_v.label}</Link>
                                                                    </TreeChild1>
                                                                    {
                                                                        _v.children && _v.children.map(__v => {
                                                                            return <div key={__v.key}>
                                                                                <TreeChild2>
                                                                                    <Link to={'/' + (__v.key as string).replace(/_/g, '/')}
                                                                                        onClick={handleBlur}
                                                                                    >{__v.label}</Link>
                                                                                </TreeChild2>
                                                                            </div>
                                                                        })
                                                                    }
                                                                </div>
                                                            })
                                                        }
                                                    </div>
                                                })
                                            }
                                        </Scrollbars>
                                    </TreeMain>
                                    : <TreeNoData>No Data</TreeNoData>
                            }
                        </TreeWrap>
                        : null
                }
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