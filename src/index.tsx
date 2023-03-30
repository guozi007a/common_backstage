import { createRoot } from 'react-dom/client';
import App from '@/App';
import './styles/common.less';
import 'antd/dist/reset.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
)