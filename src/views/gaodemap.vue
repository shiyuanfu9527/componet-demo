<script setup>
import { onMounted, reactive,ref } from 'vue';
import * as echarts from'echarts'
onMounted(() => {
    AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                getWeather(result.city)
                
            }
        })
    })
})
const state = reactive({
        today:{},
        futureData:[]
    })
const tempArr = ref([])
const echartContainer = ref(null)
const getWeather = (cityName) => {
    //加载天气查询插件
    AMap.plugin('AMap.Weather', function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
            console.log(err, data);
            state.today = data 
        });
        weather.getForecast(cityName,function(err,data){
            console.log(err,data)
            state.futureData = data.forecasts
            data.forecasts.forEach(item=>{
                tempArr.value.push(item.dayTemp)
            })
            console.log(tempArr.value)
            setTimeout(() => {
                initEchart()
            }, 200);
        })
        
    });

    const initEchart = ()=>{
        const myChat = echarts.init(echartContainer.value)
        let option = {
            xAxis:{
                type:'category',
                data:['今天','明天','后天','大后天'],
                lineStyle:{
                    color:'#fff'
                },
                axisTick:{
                    show:false
                }
            },
            yAxis:{
                type:'value',
                show:false
            },
            series:[
                {
                    name:'温度',
                    data:tempArr.value,
                    type:'line',
                    emphasis:{
                        label:{
                            show:true,
                            color:'inherit',
                        }
                    }
                }
            ],
        }
        myChat.setOption(option)
    }
}
</script>
<template>
    <div class="container">
        <div class="city-info">
            <p class="city">{{state.today.city}}</p>
            <p class="weather">{{ state.today.weather}}</p>
            <h2 class="temp">
                <em>{{ state.today.temperature }}</em>℃
            </h2>
            <div class="detail">
                <span>风力:{{ state.today.windPower}}</span>|
                <span>风向:{{ state.today.windDirection}}</span>|
                <span>空气湿度:{{ state.today.humidity}}</span>
            </div>
        </div>
        <div class="future">
            <div class="group" v-if="state.futureData.length > 0">
                明天:
                <span class="tm">白天:{{state.futureData[1].dayTemp }}℃ {{state.futureData[1].dayWeather }} {{state.futureData[1].dayWindDir }}风 {{state.futureData[1].dayWindPower }}</span>
                <span class="tm">夜间:{{state.futureData[1].nightTemp }}℃ {{ state.futureData[1].nightWeather}} {{state.futureData[1].nightWindDir }}风 {{ state.futureData[1].nightWindPower}}</span>
            </div>
            <div class="group" v-if="state.futureData.length > 0">
                后天:
                <span class="tm">白天:{{ state.futureData[2].dayTemp}}℃ {{state.futureData[2].dayWeather }} {{ state.futureData[2].dayWindDir}}风 {{state.futureData[2].dayWindPower }}</span>
                <span class="tm">夜间:{{ state.futureData[2].nightTemp}}℃ {{state.futureData[2].nightWeather }} {{state.futureData[2].nightWindDir }}风 {{ state.futureData[2].nightWindPower}}</span>
            </div>
        </div>
        <div class="ehcart-container" ref="echartContainer" style="height: 200px;"></div>
    </div>
</template>
<style lang="scss">
.container {
    min-height: 100%;
    background: #000;
    opacity: 0.7;
    color: #fff;
    margin: 25% 0;
}


.city-info {
    text-align: center;

    .temp {
        font-size: 26px;

        em {
            font-size: 34px;
            font-style: normal;
        }
    }
}

.future {
    padding: 0 10px;
    margin-top: 30px;

    .group {
        height: 44px;
        line-height: 44px;
        background: rgba(255, 255, 255, .3);
        margin-bottom: 10px;
        padding: 0 10px;
        font-size: 13px;
        border-radius: 5px;
    }
}

.echart-container {
    width: 100%;
    height: 50vh;
}
</style>