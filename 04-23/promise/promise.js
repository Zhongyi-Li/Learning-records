/*
 * @Author: your name
 * @Date: 2022-04-24 19:35:09
 * @LastEditTime: 2022-04-25 12:46:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\04-23\promise.js
 */

const PENDING = 'PENDING'
const FULFILED = 'FULFILED'
const REJECT = 'REJECT'

class Promise {
    constructor(executor){
        this.status = PENDING
        this.value;
        this.reason;
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (value)=>{
            if(this.status === PENDING){
                this.status = FULFILED
                this.value = value
            }
            this.onResolvedCallbacks.forEach( (fn) =>(fn(this.value)))
        }
        const reject = (reason)=>{
            if(this.status === PENDING){
                this.status = REJECT
                this.reason = reason
            }
            this.onRejectedCallbacks.forEach( (fn) =>(fn(this.reason)))
        }


        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
      
    }

    then(onFulfilled,onRejected){
        if(this.status === FULFILED){
            onFulfilled(this.value)
        }
        if(this.status === REJECT){
            onRejected(this.reason)
        }
        if(this.status = PENDING){
            this.onResolvedCallbacks.push((value)=>{
                onFulfilled(value)
            })
            this.onRejectedCallbacks.push((reason)=>{
                onFulfilled(reason)
            })
        }
    }
}

module.exports = Promise    