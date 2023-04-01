import { createRoot } from 'react-dom/client';
import App from '@/App';
import './i18n/config';
import './styles/common.less';
import 'antd/dist/reset.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
)