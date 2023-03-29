/**
 * 自定义ts声明
 */

// 支持less scss等的模块化
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
}

// 支持各种图片
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'