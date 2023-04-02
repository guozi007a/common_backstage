import { createRoot } from 'react-dom/client';
import './i18n/config';
import './styles/common.less';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import App from './router';

const root = createRoot(document.getElementById('root'));
root.render(
    // 配置basename，不然部署到gitee后白屏
    // 部署服务器时，使用nginx配置，这里就不用配置basename了
    <BrowserRouter basename='/common_backstage/'>
        <App />
    </BrowserRouter>
)