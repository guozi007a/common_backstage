import { createRoot } from 'react-dom/client';
import './i18n/config';
import './styles/common.less';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import App from './router';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)