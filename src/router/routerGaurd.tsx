import { FC, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PropType {
    Comp: FC;
}

const RouterGaurd: FC<PropType> = (props: PropType) => {

    const navigate = useNavigate();

    useEffect(() => { 
        const path = location.pathname;
        if (path === '/') {
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