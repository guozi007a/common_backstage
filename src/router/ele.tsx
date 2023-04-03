import { lazy, Suspense, FC, ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';
import { defaultFB, loginFB } from './fallbackStyled';

export const suspenseHOC = (Component: FC, fb?: ()=>ReactNode) => {
    return <Suspense fallback={fb ? fb() : defaultFB()}>
        <Component />
    </Suspense>
}

const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));
const Page404 = lazy(() => import('@/components/Page404'));

export const ele: RouteObject[] = [
    {
        path: '/',
        element: suspenseHOC(Home)
    },
    {
        path: '/login',
        element: suspenseHOC(Login, loginFB)
    },
    {
        path: '*',
        element: suspenseHOC(Page404)
    }
];