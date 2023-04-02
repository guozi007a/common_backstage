import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';

export const ele: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    }
];