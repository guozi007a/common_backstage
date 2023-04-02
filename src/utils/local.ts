/** 本地存取 */

interface KeyParams {
    key?: string,
    value?: any
}

class Local implements KeyParams {

    key?: string;
    value?: any;

    constructor(key?: string, value?: any) {
        this.key = key;
        this.value = value;
    }

    // 根据key获取value值
    get _key() {
        return JSON.parse(JSON.stringify(localStorage.getItem(this.key)));
    }

    // 根据key设置value
    set _value(val: any) {
        localStorage.setItem(this.key, JSON.stringify(val));
    }

    // 删除key
    delKey() {
        localStorage.delete(this.key);
    }
}

export default Local;