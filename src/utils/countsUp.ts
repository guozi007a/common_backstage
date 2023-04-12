/** 数字增长动画 */

/**
 * @param {number} start 数字初始值 默认为0
 * @param {number} target 数字目标值
 * @param {number} delay 在多少ms内增长至目标值，默认1000ms，不少于300ms
 */

export const countsUp = (start: number = 0, target: number, delay: number = 1000) => {

    if (delay < 300) {
        throw new Error('delay不得少于300ms');
    }
    if (start >= target) {
        throw new Error('目标值必须大于初始值');
    }

    // 默认多少ms内增长一次
    const defaultStepTime = 50;
    // 总共需要多少次增长能达到目标值
    const defaultSteps = Math.ceil(delay / defaultStepTime);
    // 每次应该增长的值
    const stepCount = (target - start) / defaultSteps;
    // 先计算好每次应该输出的值，并存放在数组里，初始值为start
    let countArr = [start];
    for (let i = 0; i < defaultSteps; i++) {
        const currentValue = countArr[i];
        if (currentValue + stepCount >= target) {
            countArr.push(target);
            break;
        }
        countArr.push(currentValue + stepCount);
    }
    let timer = null;
    timer = setInterval(() => {
        
    }, defaultStepTime)
}