/*
 * @Author: your name
 * @Date: 2022-04-24 16:41:17
 * @LastEditTime: 2022-04-24 17:08:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\04-23\4发布订阅.js
 */


/*
 * @Author: your name
 * @Date: 2022-04-24 13:29:09
 * @LastEditTime: 2022-04-24 16:39:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\04-23\3处理异步并发.js
 */
const fs = require('fs')
const path = require('path')

const events = {
    fnArrs:[],
    on(cb){
        this.fnArrs.push(cb)
    },
    emit(key,value){
        this.fnArrs.forEach(fn => fn())
    }
}

const school = {}
events.on((key,value)=>{
    school[key] = value
    console.log(school);
    if(Object.keys(school).length === 2){
         console.log(school);
    }
})

//并行的请求 怎么同步最终的结果 不能使用Promise
fs.readFile(path.resolve(__dirname,'./age.txt'),'utf-8',(err,data)=>{
    events.emit('age',data)
    //  console.log(data);
})

fs.readFile(path.resolve(__dirname,'./name.txt'),'utf-8',(err,data)=>{
    events.emit('name',data)
    // console.log(data);
})

//异步并行 回调函数 + 计数器 （需要每次得到数据后都打印出来）
//发布订阅模式 （所有框架中都使用了）
//观察者模式 vue2中有一套观察者模式 响应式系统，每次数据更新了都会通知视图更新 (观察者模式是基于发布订阅的)