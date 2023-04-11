/**
 * 使用阿里icon图标
 */
import { FC } from 'react';

type PropType = {
    icon?: string,
    styles?: object
}

const AliIcon: FC<PropType> = (props: PropType) => {

    const { icon, styles } = props;

    return <>
        <svg className="icon" aria-hidden="true"
            style={styles ?? {}}
        >
            <use xlinkHref={`#${icon}`}></use>
        </svg>
    </>
}

export default AliIcon;