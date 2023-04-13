import { countsUp } from '@/utils/countsUp';
import { FC, useRef, useEffect } from 'react';

type PropType = {
    target: number
}

const CounterAnimation: FC<PropType> = (props: PropType) => {

    const { target } = props;
    const counterRef = useRef(null);

    useEffect(() => { 

        counterRef.current && countsUp(counterRef.current, 0, target);

        return () => {
            counterRef.current = null;
        }
    }, [])

    return <span ref={counterRef}></span>
}

export default CounterAnimation;