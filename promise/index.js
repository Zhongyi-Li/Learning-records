/*
 * @Author: your name
 * @Date: 2022-04-24 20:22:22
 * @LastEditTime: 2022-04-25 12:17:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\04-23\promise\index.js
 */
const Promise = require('./promise')
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{    
       resolve('success')
    },1000)
}) 
promise.then((data)=>{
    console.log(data);
},err=>{
    console.log(err);
})