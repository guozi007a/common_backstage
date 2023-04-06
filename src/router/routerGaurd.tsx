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
        if (path === '/') {
            navigate('/index', { replace: true });
        } else if (path === PROFILE_ROOT_URL) {
            navigate(PROFILE_ROOT_URL + 'index', { replace: true });
        }
    }, [])

    return <Suspense fallback={<span></span>}>
        <props.Comp />
    </Suspense>
}


export const susHoc = (Comp: FC) => {

    return <RouterGaurd Comp={Comp} />
}