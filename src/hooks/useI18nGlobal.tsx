import { useState, useEffect } from 'react';
import Local from '@/utils/local';


const useI18nGlobal = (): string => {

    const [lang, setLang] = useState('');

    useEffect(() => { 
        const local = new Local('lang');
        setLang(local._key || 'cn');
    }, [])

    return lang;
}

export default useI18nGlobal;