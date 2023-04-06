import { createRoot } from 'react-dom/client';
import './i18n/config';
import './styles/common.less';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import App from './router';
import { Provider } from 'react-redux';
import store from '@/store';
import PROFILE_ROOT_URL from '@/config/profileRootUrl';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter basename={`${process.env.NODE_ENV === 'development' ? '' : PROFILE_ROOT_URL}`}>
            <App />
        </BrowserRouter>
    </Provider>
)