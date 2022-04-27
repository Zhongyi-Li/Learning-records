
/**
 * @description:  高阶函数的定义
 * @firstKind 函数返回一个函数
 * @secondKind 函数参数为一个函数
 */

function core(...a){
    console.log('core',a);
}

Function.prototype.befoeCore = function(cb){
    return (...args)=>{
        cb()
        this(...args)   //this 指向调用beforCore的函数 core
    }
}

const newCore = core.befoeCore(()=>{
    console.log('123');
})

newCore(1,2,3)