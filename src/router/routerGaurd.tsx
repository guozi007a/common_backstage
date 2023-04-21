import { FC, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 生产环境下的根路由
import PROFILE_ROOT_URL from '@/config/profileRootUrl';
import { USERINFO } from '@/config/loginInfo';
import Local from '@/utils/local';

interface PropType {
    Comp: FC;
}

const RouterGaurd: FC<PropType> = (props: PropType) => {

    const navigate = useNavigate();

    useEffect(() => { 
        const path = location.pathname;
        
        if (path === '/' || (path === PROFILE_ROOT_URL + '/')) {
            navigate('/index', { replace: true });
        }

        const local = new Local(USERINFO);
        if (!local._key) {
            navigate('/login', { replace: true });
        }
    }, [])

    return <Suspense fallback={<span></span>}>
        <props.Comp />
    </Suspense>
}


export const susHoc = (Comp: FC) => {

    return <RouterGaurd Comp={Comp} />
}