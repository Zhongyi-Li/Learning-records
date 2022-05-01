

/**
 * @description: 把一个函数多个参数 转为多个函数单个参数 （参数多次传入 每次只传入一个参数）
 * @example: sum(1,2,3,4,5) => sum(1)(2)(3)(4)(5)
 * @lib redux-compose lodash
 */

//同过高阶函数(闭包) 暂存用户的传入的参数
function isTyping(typing){
    return function(val){
        return Object.prototype.toString.call(val) === `[object ${typing}]`   
    }
}

const utils = {}
const typings = ['Function',"Array","Number"]

typings.forEach((type)=>{
    utils['is'+type] = isTyping(type)
})

console.log(utils.isArray([]));

const isString = isTyping('String')
console.log(isString('abc'));
console.log(isString(123));

//作业 add(1,2,3) => add(1)(2)(3) 实现一个通用的柯里化函数

function add(num){
    let r = num;
    return (num)=>{
        r+=num
        return ()=>{
            return r+=num
        }
    }
}

