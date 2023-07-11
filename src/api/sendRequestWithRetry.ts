import axios from "axios";
// 调用示例
/**
 * axios封装请求失败重试工具
 * @autor syf
 * 
 * @param 请求地址
 * @param 重试次数
 * @param 重试延迟时间
 * example:const url:string = 'https://api.example.com/data'
const maxRetryCount:number = 3 //最大重试次数
const retryDelay:number = 1000 //重试延迟时间，单位为毫秒

sendRequestWithRety(url,maxRetryCount,retryDelay)
.then(data=>{
    console.log('请求成功',data);
})
.catch(error=>{
    console.log('请求失败',error);
})
 */
export default function sendRequestWithRety<T>(url:string,maxRetryCount:number,retryDelay:number):Promise<T>{
    let retryCount:number = 0
    function send(){
        return axios.get(url).then(res=>{
            // 请求成功，返回响应
            return res.data
        })
        .catch(error=>{ 
            if(retryCount<maxRetryCount){
                retryCount++
                console.log(`请求失败，正在进行第${retryCount}次重试..`);
                return new Promise(resolve=>setTimeout(resolve,retryDelay))
                .then(send) //延迟一段时间后进行重试
            }else{
                throw error
            }
        })
    }
    return send()
}
