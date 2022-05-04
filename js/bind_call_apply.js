/*
 * @Author: your name
 * @Date: 2022-05-04 23:36:28
 * @LastEditTime: 2022-05-04 23:38:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\js\bind_call_apply.js
 */
//bind
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
      throw TypeError('error');
    }
    // 缓存this
    const self = this;
    const args = [...arguments].slice(1);
    //返回一个函数
    return function fn() {
      // 判断调用方式
      if (this instanceof fn) {
        return new self(...args, ...arguments);
      }
      return self.apply(context, args.concat(...arguments));
    };
  };
  
//call
Function.prototype.call = function (context, ...args) {
    var context = context || window;
    context.fn = this;
    var res = eval('context.fn(...args)');
    delete context.fn
    return res;
  }
  const obj = {name:'jack'}
  function print(){
      console.log(this.name);
  }
  print()
//apply
  Function.prototype.apply = function (context, args) {
    let context = context || window;
    context.fn = this;
    let res = eval('context.fn(...args)');
    delete context.fn
    return res;
  }
  

