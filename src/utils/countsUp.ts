/** 数字增长动画 */

/**
 * @param {DOM} dom 要渲染的dom节点
 * @param {number} start 数字初始值 默认为0
 * @param {number} target 数字目标值
 * @param {number} delay 在多少ms内增长至目标值，默认1000ms，不少于200ms
 */

export const countsUp = (dom: HTMLElement, start = 0, target: number, delay = 1000) => {

    if (delay < 200) {
        throw new Error('The renderer timing of transition animition must be greater than 200 ms.');
    }

    // 默认多少ms内增长一次
    const defaultStepTime = 50;
    // 总共需要多少次增长能达到目标值
    const defaultSteps = Math.ceil(delay / defaultStepTime);
    // 每次应该增长的值
    const stepCount = (target - start) / defaultSteps;

    // 计算target的小数位数
    let precision = 0;
    if (Math.ceil(target) !== Math.floor(target)) {
        const reg = /\.(.*)$/g;
        const lice = reg.exec(target + '');
        precision = lice[1].length;
    }
    
    let timer = 0;
    let currentCount = start;

    timer = window.setInterval(() => {
        currentCount += stepCount;
        if (currentCount >= target) {
            dom.innerHTML = target + '';
            clearInterval(timer);
            return;
        }
        // 数字增长时，保持和target同样的精度去计算
        // 防止出现0.1 + 0.2 = 0.30000000000001的情况
        // 因为它会造成DOM结构的混乱
        dom.innerHTML = currentCount.toFixed(precision);
    }, defaultStepTime)
}