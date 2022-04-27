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

function after(timer,cb){
    const data = {}   //闭包会把每一次执行结果 data缓存起来
    return (...args)=>{
        const [key,value] = args
        data[key] = value
        if(--timer == 0){
            cb(data)
        }
    }
}

const finish = after(2,(data)=>{
    console.log('data',data);
})

//并行的请求 怎么同步最终的结果 不能使用Promise
fs.readFile(path.resolve(__dirname,'./age.txt'),'utf-8',(err,data)=>{
    finish('age',data)
    //  console.log(data);
})

fs.readFile(path.resolve(__dirname,'./name.txt'),'utf-8',(err,data)=>{
    finish('name',data)
    // console.log(data);
})

//异步并行 回调函数 + 计数器 （需要每次得到数据后都打印出来）
//使用 发布订阅模式 （所有框架中都使用了）