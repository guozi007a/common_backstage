import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const suspenseHOC = (Component: React.FC) => {
    return <Suspense fallback={<span>Loading...</span>}>
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
        element: suspenseHOC(Login)
    },
    {
        path: '*',
        element: suspenseHOC(Page404)
    }
];