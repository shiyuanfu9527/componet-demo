/** 添加css样式
 * @param {输入要的样式名 fadeIn ||transformIn } style 
 */
const  fadeIn = `@keyframes fadeIn {
    from {
      filter: blur(10px);
    }
    to {
      filter: blur(0px);
    }
  }

  .fadeIn {
    animation: fadeIn 0.3s ease-in;
  }`
const transformIn = `@keyframes bounce-in {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .transformIn {
    opacity: 0;
    animation: bounce-in 0.5s ease-in-out forwards;
  }
  `
export function addStyle(str:string){
        const style = document.createElement('style')
        style.innerHTML = str
        document.body.appendChild(style)


}