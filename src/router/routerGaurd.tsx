import { Component, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

interface PropType {
    Comp: React.FC;
}

interface StateType {
    toPath: string;
}

class RouterGaurd extends Component<PropType, StateType> {

    constructor(props: PropType) {
        super(props);

        this.state = {
            toPath: ''
        }
    }

    static getDerivedStateFromProps() {
        const path = location.pathname;

        console.log('path: ', path);
        
        
        

        return {
            toPath: path
        };
    }

    render() {

        const { toPath } = this.state;

        console.log('toPath: ', toPath);
        

        const { Comp } = this.props;

        const C = 
        <Suspense fallback={<span></span>}>
            <Comp />
        </Suspense>

        return C;
    }
}

export const susHoc = (Comp: React.FC) => {

    return <RouterGaurd Comp={Comp} />
}