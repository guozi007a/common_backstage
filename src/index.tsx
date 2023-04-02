import { createRoot } from 'react-dom/client';
// import App from '@/App';
import './i18n/config';
import './styles/common.less';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './router';
import Home from './pages/home';
import Login from './pages/login';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
)