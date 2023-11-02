<script setup>
</script>

<template>
  <!-- <h1>各种demo</h1> -->
  <!-- <img class='avtor' src="https://p3-passport.byteimg.com/img/user-avatar/ee1a1456b52fb7cff320f0f8b8a96698~100x100.awebp"> -->
  <div class="card">
        <div class="imgBox">
            <img src="https://img2.baidu.com/it/u=2794701416,1598421562&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=692" alt="">
        </div>
        <div class="content">
            <div class="details">
                <div class="group">
                        
                        <h4>社交网络:&nbsp;<span>
                            <a href="https://juejin.cn/user/523802940020551">
                                <img src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg" alt="gold" class="icon source-icon" >
                            </a>
                            <a href="https://github.com/shiyuanfu9527">
                                <svg height="16"   width="16"  alt="github">
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                </svg>
                            </a>    
                            </span>
                           
                        </h4>
                        <h4>个人介绍:&nbsp;<span>一名喜欢听音乐的程序员</span></h4>
                    </div>
                <div class="data">
                    <div>
                        <h3>14 <br><span>动态</span></h3>
                    </div>
                    <span style="border:solid 0.1px #555;"></span>
                    <div>
                        <h3>33 <br><span>关注</span></h3>
                    </div>
                    <span style="border:solid 1px #555;"></span>
                    <div>
                        <h3>10 <br><span>粉丝</span></h3>
                    </div>
                </div>
                <div class="Btn">
                    <button>+关注</button>
                    <button><span><svg t="1683123965373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2236" width="200" height="200"><path d="M887.808 841.04533332H129.024c-35.84 0-65.024-29.184-65.024-65.024V219.98933332c0-35.84 29.184-65.024 65.024-65.024h759.296c35.84 0 65.024 29.184 65.024 65.024v556.032c-0.512 35.84-29.696 65.024-65.536 65.024zM129.024 206.16533332c-7.68 0-13.824 6.144-13.824 13.824v556.032c0 7.68 6.144 13.824 13.824 13.824h759.296c7.68 0 13.824-6.144 13.824-13.824V219.98933332c0-7.68-6.144-13.824-13.824-13.824H129.024z" fill="#000000" p-id="2237"></path><path d="M486.912 555.86133332L203.264 272.21333332c-10.24-10.24-10.24-26.112 0-36.352s26.112-10.24 36.352 0l283.648 283.648c10.24 10.24 10.24 26.112 0 36.352-10.24 9.728-26.624 9.728-36.352 0z" fill="#000000" p-id="2238"></path><path d="M813.568 271.18933332l-283.648 283.648c-10.24 10.24-26.112 10.24-36.352 0s-10.24-26.112 0-36.352l283.648-283.648c10.24-10.24 26.112-10.24 36.352 0 9.728 10.24 9.728 26.624 0 36.352z" fill="#000000" p-id="2239"></path></svg></span> <span>私信</span> </button>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="dynamic-background">
      <iframe src="https://api.r10086.com/PPT/PPT.php?PPT=原神" width="100%" height="100%" style="border: 0;"></iframe>
      </div> -->
    
</template>
<style scoped>
h1 {
  padding: 0.72em 1.2em;
}
/* 
.avtor {
  border-radius: 50%;
}

.avtor:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(.34, 0, .84, 1);
} */
.dynamic-background{
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  left: 0%;
  top: 0%;
}
.card {
    background-image: url(https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/2242c60f0b0127977f5f543841940b40.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_960%2ch_540);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
    height: 12rem;
    border-radius: 1.5rem;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.15);
    transition: 1.25s;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.card:hover {
    height: 26rem;
    background-image: url(https://wallpaper-static.cheetahfun.com/wallpaper/sites/mobile/statics/anime/1.jpg);
}

.imgBox {
    position: absolute;
    left: 50%;
    top: -5rem;
    transform: translateX(-50%);
    width: 10rem;
    height: 10rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.35);
    overflow: hidden;
    transition: 1.25s;
}

.card:hover .imgBox {
    width: 14rem;
    height: 14rem;
    border-radius: 1.5rem;
}

.imgBox img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .content {
    position: absolute;
    left: 0%;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}

.card .content .details {
    padding: 2rem;
    text-align: center;
    width: 100%;
    transition: 1.25s;
    transform: translateY(9rem);
}
.card .content .details .group{
    text-align: left;
    color: #fff;
}
.card .content .details .group h4{
    padding-bottom: 0.25rem;
 }
.card .content .details .group span{
   
    opacity: 0.5;
 }
 .card .content .details .group span a{
   
   margin: .5rem;
}
.card .content .details .group a img{
    width: 1rem;
    height: 1rem;
 }
.card:hover .content .details {
    padding: 2rem;
    text-align: center;
    width: 100%;
    transition: 1.25s;
    transform: translateY(0rem);
    
}

.card .content .details h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    line-height: 1.2rem;
}


.card .content .details h2 span {
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.5;
}
.card .content .details .data{
    display: flex;
    visibility: hidden;
    justify-content: space-between;
    margin:  1.5rem 0rem;
   
}
.card:hover .content .details .data {
    visibility: visible;
}

.card .content .details .data h3{
    font-size: 1rem;
    color: #fff;
    line-height: 1.2rem;
    font-weight: 600;
}
.card .content .details .data h3 span{
    font-size: 0.85rem;
    font-weight: 400;
    opacity: 0.5;
}
.card .content .details .Btn button svg{
    text-align: center;
    width:  1rem;
    height: 1rem;
}
.card .content .details .Btn{
    width: 20rem;
   display: flex;
   justify-content: space-between;
}
.card .content .details .Btn button{
    padding: 0.75rem 2.25rem;
    border-radius: 0.75rem;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
}
</style>
