import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { susHoc } from './routerGaurd';


const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));
const Page404 = lazy(() => import('@/components/Page404'));
const Main = lazy(() => import('@/pages/main'));
// const Merchant = lazy(() => import('@/pages/merchant'));
// const Commodity = lazy(() => import('@/pages/commodity'));
// const Costomer = lazy(() => import('@/pages/costomer'));
// const BusinessOrder = lazy(() => import('@/pages/business-order'));
// const Tenders = lazy(() => import('@/pages/tenders'));
const Trade = lazy(() => import('@/pages/trade'));
// const Aftermarket = lazy(() => import('@/pages/aftermarket'));
// const Warehouse = lazy(() => import('@/pages/warehouse'));
// const Department = lazy(() => import('@/pages/department'));
// const Authority = lazy(() => import('@/pages/authority'));
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
                element: susHoc(Trade)
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