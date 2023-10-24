<template>
    <input type="file" ref="fileInput" name="avatar" title="选择 pdf 文件">
</template>
<script setup lang="ts">
import * as pdfjsLib from 'pdfjs-dist'
import {onMounted, ref} from 'vue'
const fileInput= ref<HTMLInputElement |null >()
// pdf.js 从性能考虑，使用了 WebWorker, 在浏览器子线程解析图片等资源，不阻塞页面UI和交互。
onMounted(()=>{
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.js';
const inputElement = fileInput.value  as HTMLInputElement
inputElement.addEventListener('change',()=>{
    const file = inputElement.files?.[0]
    console.log('fileInput file:',file);
    const fileReader = new FileReader()
    fileReader.onload = function(){
        const typedarray = new Uint8Array(this.result as ArrayBuffer) 
        const loadingTask = pdfjsLib.getDocument(typedarray)
        loadPDFFile(loadingTask)
    }
    fileReader.readAsArrayBuffer(file!)
},false)
})

const loadPDFFile = async (loadingTask)=>{
    // PDF 加载任务
    const pdf = await loadingTask.promise
    // 获取PDF页数
    const numPages = pdf.numPages
    for(let curPage = 1;curPage<=numPages;curPage++){
        // 返回当前页
        console.log('loadingServerFile curPage',curPage);
        const page = await pdf.getPage(curPage)
        
        const scale = 1.5
        // 获取渲染视角尺寸
        const viewport = page.getViewport({scale})
        
        // support HIDPI-screens
        const outputScale = window.devicePixelRatio || 1
        // 传入离屏canvas
        const canvas = new OffscreenCanvas(200,200)
        // 获取canvas上下文
        const context = canvas.getContext('2d')
        console.log(context);
        // 转换尺寸
        const transform = outputScale !== 1?[outputScale,0,0,outputScale,0,0]:null
        const renderContext = {
            canvasContext : context,
            transform,
            viewport
        }
        // 调用page.render 触发渲染
        const renderTask = page.render(renderContext)
        // 等待renderTask 渲染任务
        // await delay(500) //如果渲染过快，可能导致cpu飙升，电脑可用内存不够，可以加延迟减慢速度
        await renderTask.promise
        // 获取操作列表
        const ops = await page.getOperatorList()
        // 提取图片
        const imageNames = ops.fnArray.reduce((acc:Array<number>,curr:number,i:number)=>{
            if([pdfjsLib.OPS.paintImageXObject].includes(curr)){
                acc.push(ops.argsArray[i][0])
            }
            return acc
        },[])
        for(const imageName of imageNames){
            console.log('imageName:',imageName);
            page.objs.get(imageName,(image)=>{
                (async function() {
                    const bmp = image.bitmap
                    console.log('bmp:',bmp);
                    // OffscreenCanvas
                    const resizeScale = 1/4 //控制转换后的图片大小
                    const width = bmp.width * resizeScale
                    const height = bmp.height * resizeScale
                    console.log(height);
                    const canvas = new OffscreenCanvas(width,height)
                    // 获取 canvas bitmaprenderer 上下文
                    const ctx = canvas.getContext('bitmaprenderer')
                    // 把 ImageBitmap 渲染到OffscreenCanvas
                    ctx?.transferFromImageBitmap(bmp)
                    // 把canvas画布转化为Blob 对象
                    // https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/convertToBlob
                    const blob = await canvas.convertToBlob()
                    console.log('blob:',blob); //blob
                    // 最后使用Blob 作为URL.createObjectURL的参数，渲染出img图片
                    // 如果不需要渲染，则可以讲Blob 数据上传到云存储
                    const img = document.body.appendChild(new Image())
                    img.width = width
                    img.height = height
                    img.src = URL.createObjectURL(blob)
                })()
            })
        }

    }

}
</script>
