import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { susHoc } from './routerGaurd';


const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));
const Page404 = lazy(() => import('@/components/Page404'));
const Main = lazy(() => import('@/pages/main'));
const MerchantList = lazy(() => import('@/pages/merchant/MerchantList'));
const AddMerchant = lazy(() => import('@/pages/merchant/AddMerchant'));
const MerchantAnalysis = lazy(() => import('@/pages/merchant/MerchantAnalysis'));
const CommodityList = lazy(() => import('@/pages/commodity/CommodityList'));
const CommodityAnalysis = lazy(() => import('@/pages/commodity/CommodityAnalysis'));
const CostomerList = lazy(() => import('@/pages/costomer/CostomerList'));
const CostomerAnalysis = lazy(() => import('@/pages/costomer/CostomerAnalysis'));
const BusinessOrderList = lazy(() => import('@/pages/business-order/BusinessOrderList'));
const BusinessOrderBack = lazy(() => import('@/pages/business-order/BusinessOrderBack'));
const BusinessOrderAnalysis = lazy(() => import('@/pages/business-order/BusinessOrderAnalysis'));
const TendersList = lazy(() => import('@/pages/tenders/TendersList'));
const AftermarketList = lazy(() => import('@/pages/aftermarket/AftermarketList'));
const AftermarketAnalysis = lazy(() => import('@/pages/aftermarket/AftermarketAnalysis'));
const WarehouseMaterial = lazy(() => import('@/pages/warehouse/WarehouseMaterial'));
const WarehouseProduct = lazy(() => import('@/pages/warehouse/WarehouseProduct'));
const WarehouseTools = lazy(() => import('@/pages/warehouse/WarehouseTools'));
const DepartmentList = lazy(() => import('@/pages/department/DepartmentList'));
const AuthoritySetup = lazy(() => import('@/pages/authority/AuthoritySetup'));
const AuthorityDepartment = lazy(() => import('@/pages/authority/AuthorityDepartment'));
const AuthorityPosition = lazy(() => import('@/pages/authority/AuthorityPosition'));
const AuthorityAccountsList = lazy(() => import('@/pages/authority/AuthorityAccountsList'));
const AuthorityCreateAccount = lazy(() => import('@/pages/authority/AuthorityCreateAccount'));
const TradeTotalCounts = lazy(() => import('@/pages/trade/TradeTotalCounts'));
const TradeInTrading = lazy(() => import('@/pages/trade/TradeInTrading'));


export const ele: RouteObject[] = [
    {
        path: '/',
        element: susHoc(Home),
        children: [
            {   // 首页
                path: 'index',
                element: susHoc(Main)
            },
            {   // 商户管理
                path: 'merchant',
                // element: susHoc(Merchant),
                children: [
                    {
                        path: 'list',
                        element: susHoc(MerchantList)
                    },
                    {
                        path: 'add',
                        element: susHoc(AddMerchant)
                    }, {
                        path: 'analysis',
                        element: susHoc(MerchantAnalysis)
                    }
                ]
            },
            {   // 产品管理
                path: 'commodity',
                // element: susHoc(Commodity),
                children: [
                    {
                        path: 'list',
                        element: susHoc(CommodityList)
                    },
                    {
                        path: 'analysis',
                        element: susHoc(CommodityAnalysis)
                    }
                ]
            },
            {   // 客户管理
                path: 'costomer',
                // element: susHoc(Costomer),
                children: [
                    {
                        path: 'list',
                        element: susHoc(CostomerList)
                    },
                    {
                        path: 'analysis',
                        element: susHoc(CostomerAnalysis)
                    }
                ]
            },
            {   // 订单管理
                path: 'business-order',
                // element: susHoc(BusinessOrder),
                children: [
                    {
                        path: 'list',
                        element: susHoc(BusinessOrderList)
                    },
                    {
                        path: 'back',
                        element: susHoc(BusinessOrderBack)
                    },
                    {
                        path: 'analysis',
                        element: susHoc(BusinessOrderAnalysis)
                    }
                ]
            },
            {   // 项目管理
                path: 'tenders',
                // element: susHoc(Tenders),
                children: [
                    {
                        path: 'list',
                        element: susHoc(TendersList)
                    }
                ]
            },
            {   // 交易管理
                path: 'trade',
                // element: susHoc(Trade),
                children: [
                    {
                        path: 'total-counts',
                        element: susHoc(TradeTotalCounts)
                    },
                    {
                        path: 'intrading',
                        element: susHoc(TradeInTrading)
                    }
                ]
            },
            {   // 售后管理
                path: 'aftermarket',
                // element: susHoc(Aftermarket),
                children: [
                    {
                        path: 'list',
                        element: susHoc(AftermarketList)
                    },
                    {
                        path: 'analysis',
                        element: susHoc(AftermarketAnalysis)
                    }
                ]
            },
            {   // 仓库管理
                path: 'warehouse',
                // element: susHoc(Warehouse),
                children: [
                    {
                        path: 'material',
                        element: susHoc(WarehouseMaterial)
                    },
                    {
                        path: 'product',
                        element: susHoc(WarehouseProduct)
                    },
                    {
                        path: 'tools',
                        element: susHoc(WarehouseTools)
                    }
                ]
            },
            {   // 部门管理
                path: 'department',
                // element: susHoc(Department),
                children: [
                    {
                        path: 'list',
                        element: susHoc(DepartmentList)
                    }
                ]
            },
            {   // 权限管理
                path: 'authority',
                // element: susHoc(Authority),
                children: [
                    {
                        path: 'setup',
                        element: susHoc(AuthoritySetup)
                    },
                    {
                        path: 'depart',
                        element: susHoc(AuthorityDepartment)
                    },
                    {
                        path: 'position',
                        element: susHoc(AuthorityPosition)
                    },
                    {
                        path: 'accounts-list',
                        element: susHoc(AuthorityAccountsList)
                    },
                    {
                        path: 'create-account',
                        element: susHoc(AuthorityCreateAccount)
                    }
                ]
            },
        ]
    },
    {   // 登录
        path: '/login',
        element: susHoc(Login)
    },
    {   // 404
        path: '*',
        element: <Page404 />
    }
];