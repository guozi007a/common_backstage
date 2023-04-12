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
    MacCommandOutlined,
    AppstoreAddOutlined,
    LineChartOutlined,
    InteractionOutlined,
    FormatPainterOutlined,
    ToolOutlined,
    SettingOutlined
} from '@ant-design/icons';
import AliIcon from '@/components/AliIcon';

const iconStyles = {
    fontSize: '14px',
    marginRight: '10px',
};

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
        children: [
            {
                key: 'merchant_list',
                icon: <UnorderedListOutlined />,
                label: '商户列表'
            },
            {
                key: 'merchant_add',
                icon: <AppstoreAddOutlined />,
                label: '添加商户'
            },
            {
                key: 'merchant_analysis',
                icon: <LineChartOutlined />,
                label: '商户分析'
            }
        ]
    },
    {
        key: 'commodity',
        icon: <GoldOutlined />,
        label: '产品管理',
        children: [
            {
                key: 'commodity_list',
                icon: <UnorderedListOutlined />,
                label: '产品列表'
            },
            {
                key: 'commodity_analysis',
                icon: <LineChartOutlined />,
                label: '产品分析'
            }
        ]
    },
    {
        key: 'costomer',
        icon: <SolutionOutlined />,
        label: '客户管理',
        children: [
            {
                key: 'costomer_list',
                icon: <UnorderedListOutlined />,
                label: '客户列表'
            },
            {
                key: 'costomer_analysis',
                icon: <LineChartOutlined />,
                label: '客户分析'
            }
        ]
    },
    {
        key: 'business-order',
        icon: <UnorderedListOutlined />,
        label: '订单管理',
        children: [
            {
                key: 'bussiness-order_list',
                icon: <UnorderedListOutlined />,
                label: '订单列表'
            },
            {
                key: 'bussiness-order_back',
                icon: <NodeCollapseOutlined />,
                label: '退货申请'
            },
            {
                key: 'bussiness-order_analysis',
                icon: <LineChartOutlined />,
                label: '订单分析'
            },
        ]
    },
    {
        key: 'tenders',
        icon: <MergeCellsOutlined />,
        label: '项目管理',
        children: [
            {
                key: 'tenders_list',
                icon: <UnorderedListOutlined />,
                label: '投标列表'
            }
        ]
    },
    {
        key: 'trade',
        icon: <BoldOutlined />,
        label: '交易管理',
        children: [
            {
                key: 'trade_total-counts',
                icon: <AliIcon icon='icon-jiaoyizonge' styles={iconStyles} />,
                label: '交易总量'
            },
            {
                key: 'trade_intrading',
                icon: <AliIcon icon='icon-jiaoyiguanli' styles={iconStyles} />,
                label: '正在交易'
            }
        ]
    },
    {
        key: 'aftermarket',
        icon: <InsuranceOutlined />,
        label: '售后保障',
        children: [
            {
                key: 'aftermarket_list',
                icon: <UnorderedListOutlined />,
                label: '售后申请'
            },
            {
                key: 'aftermarket_analysis',
                icon: <LineChartOutlined />,
                label: '售后分析'
            },
        ]
    },
    {
        key: 'warehouse',
        icon: <WalletOutlined />,
        label: '仓库管理',
        children: [
            {
                key: 'warehouse_material',
                icon: <InteractionOutlined />,
                label: '原材料'
            },
            {
                key: 'warehouse_product',
                icon: <FormatPainterOutlined />,
                label: '成品'
            },
            {
                key: 'warehouse_tools',
                icon: <ToolOutlined />,
                label: '工具设备'
            }
        ]
    },
    {
        key: 'department',
        icon: <NodeCollapseOutlined />,
        label: '部门管理',
        children: [
            {
                key: 'department_list',
                icon: <UnorderedListOutlined />,
                label: '成员列表'
            }
        ]
    },
    {
        key: 'authority',
        icon: <MacCommandOutlined />,
        label: '权限管理',
        children: [
            {
                key: 'authority_setup',
                icon: <SettingOutlined />,
                label: '特定成员'
            },
            {
                key: 'authority_depart',
                icon: <AliIcon icon='icon-bumen' styles={iconStyles} />,
                label: '部门权限'
            },
            {
                key: 'authority_position',
                icon: <AliIcon icon='icon-mendiangangwei_huaban' styles={iconStyles} />,
                label: '岗位权限'
            },
            {
                key: 'authority_accounts-list',
                icon: <AliIcon icon='icon-zhanghaoquanxianguanli' styles={iconStyles} />,
                label: '账号列表'
            },
            {
                key: 'authority_create-account',
                icon: <AliIcon icon='icon-chuangjianluyou' styles={iconStyles} />,
                label: '生成账号'
            },
        ]
    },
];

