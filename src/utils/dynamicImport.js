/**
 * 主要解决ts不支持动态导入外部/远程es模块的问题
 * @param {要引入的url地址} url 
 */
export default async function dynamicImport(url){
    try {
        const module = await import(/* @vite-ignore */url)
        return module
    } catch (error) {
        console.log('模块加载失败',error);
    }
}