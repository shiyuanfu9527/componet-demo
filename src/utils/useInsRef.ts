/**
 * 用来产生组件的ref，不用再写类型约束
 * example: const formRef = useComRef(Elform)
 * 没用这个工具的话，是 const formRef = ref<InstanceType <typeof Elform>>()
 */
import {ref} from 'vue'
export function useComRef<T extends abstract new (...args:any)=>any>(_comp: T){
    return ref<InstanceType<T>>()
}