/*  配置basename，不然部署到gitee后白屏
    部署服务器时，使用nginx配置，这里就不用配置basename了 
    commonjs导出模式，供webpack配置使用
*/

const PROFILE_ROOT_URL = '/common_backstage/';

module.exports = PROFILE_ROOT_URL;