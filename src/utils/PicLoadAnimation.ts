import { addStyle } from "./css"
/**
 * 
 * @param entries 需要监听的元素 document.querySelectorAll("img[data-src]")
 * @param observer 观察者
 * @param StyleName 样式名字 可以在utils/css里看
 */
export  function PicLoading(
    entries: IntersectionObserverEntry[],
    observer:IntersectionObserver,
    StyleName:string
){
    if(!document.body.classList.contains(StyleName)){
        addStyle(StyleName)
    }
    entries.forEach((entry)=>{
        if(entry.intersectionRatio<=0)return
        const img = entry.target as HTMLImageElement
        const src = img.getAttribute("data-src")
        img.setAttribute("src",src??"") // 将真实的图片地址赋给src属性
        img.onload = ()=>{
            img.setAttribute("class",StyleName)
        }
        observer.unobserve(img)
    })
    
}
