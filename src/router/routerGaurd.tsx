import { FC, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 生产环境下的根路由
import PROFILE_ROOT_URL from '@/config/profileRootUrl';

interface PropType {
    Comp: FC;
}

const RouterGaurd: FC<PropType> = (props: PropType) => {

    const navigate = useNavigate();

    useEffect(() => { 
        const path = location.pathname;
        console.log('path: ', path);
        console.log('path === /: ', path === '/');
        console.log('path === root: ', path === PROFILE_ROOT_URL);
        
        if (path === '/' || path === PROFILE_ROOT_URL || path === PROFILE_ROOT_URL.slice(0, -1)) {
            navigate('/index', { replace: true });
        }
    }, [])

    return <Suspense fallback={<span></span>}>
        <props.Comp />
    </Suspense>
}


export const susHoc = (Comp: FC) => {

    return <RouterGaurd Comp={Comp} />
}