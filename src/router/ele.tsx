import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { susHoc } from './routerGaurd';


const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));
const Page404 = lazy(() => import('@/components/Page404'));
const Main = lazy(() => import('@/pages/main'));
const Merchant = lazy(() => import('@/pages/merchant'));
const Commodity = lazy(() => import('@/pages/commodity'));
const Costomer = lazy(() => import('@/pages/costomer'));
const BusinessOrder = lazy(() => import('@/pages/business-order'));
const Tenders = lazy(() => import('@/pages/tenders'));
const Trade = lazy(() => import('@/pages/trade'));
const Aftermarket = lazy(() => import('@/pages/aftermarket'));
const Warehouse = lazy(() => import('@/pages/warehouse'));
const Department = lazy(() => import('@/pages/department'));
const Authority = lazy(() => import('@/pages/authority'));


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
                element: susHoc(Merchant)
            },
            {   // 产品管理
                path: 'commodity',
                element: susHoc(Commodity)
            },
            {   // 客户管理
                path: 'costomer',
                element: susHoc(Costomer)
            },
            {   // 订单管理
                path: 'business-order',
                element: susHoc(BusinessOrder)
            },
            {   // 项目管理
                path: 'tenders',
                element: susHoc(Tenders)
            },
            {   // 交易管理
                path: 'trade',
                element: susHoc(Trade)
            },
            {   // 售后管理
                path: 'aftermarket',
                element: susHoc(Aftermarket)
            },
            {   // 仓库管理
                path: 'warehouse',
                element: susHoc(Warehouse)
            },
            {   // 部门管理
                path: 'department',
                element: susHoc(Department)
            },
            {   // 权限管理
                path: 'authority',
                element: susHoc(Authority)
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