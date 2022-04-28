/*
 * @Author: your name
 * @Date: 2022-04-28 21:00:49
 * @LastEditTime: 2022-04-28 22:52:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\基础算法\bsearch.ts
 */


/**
 * @description: 二分查找
 **/


const bsearch = (Arr:Array<number>,x:string | number):number =>{
    let l = 0,  //查找左边界范围
        r = A.length-1,  //查找右范围边界
        guess;   //猜测位置

        while(l <=r ){
            //guess 等于 l,r中间的位置
            //l左 r右
            guess = Math.floor((l+r)/2) 
            if(A[guess] === x) return guess
            else if(A[guess] > x ) r = guess -1
            else l = guess + 1
        }   
        return -1  //没有查找到
}
const A = [3,5,22,27,33,46,56,59,67,68,72,78,88,85,88,99]
bsearch(A,3)
