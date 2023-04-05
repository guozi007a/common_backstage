/** 导航分组 */
import {
    HomeOutlined,
    ShopFilled,
    GoldOutlined,
    SolutionOutlined,
    UnorderedListOutlined,
    MergeCellsOutlined,
    BoldOutlined,
    InsuranceOutlined,
    WalletOutlined,
    NodeCollapseOutlined,
    MacCommandOutlined
} from '@ant-design/icons';

export interface ItemProp {
    key: React.Key;
    icon?: React.ReactNode;
    label: string;
    type?: 'group';
    children?: ItemProp[];
}

export const items: ItemProp[] = [
    {
        key: 'index',
        icon: <HomeOutlined />,
        label: '首页'
    },
    {
        key: 'merchant',
        icon: <ShopFilled />,
        label: '商户管理',
    },
    {
        key: 'commodity',
        icon: <GoldOutlined />,
        label: '产品管理',
    },
    {
        key: 'costomer',
        icon: <SolutionOutlined />,
        label: '客户管理',
    },
    {
        key: 'business-order',
        icon: <UnorderedListOutlined />,
        label: '订单管理',
    },
    {
        key: 'tenders',
        icon: <MergeCellsOutlined />,
        label: '项目管理',
    },
    {
        key: 'trade',
        icon: <BoldOutlined />,
        label: '交易管理',
    },
    {
        key: 'aftermarket',
        icon: <InsuranceOutlined />,
        label: '售后保障',
    },
    {
        key: 'warehouse',
        icon: <WalletOutlined />,
        label: '仓库管理',
    },
    {
        key: 'department',
        icon: <NodeCollapseOutlined />,
        label: '部门管理',
    },
    {
        key: 'authority',
        icon: <MacCommandOutlined />,
        label: '权限管理',
    },
];

