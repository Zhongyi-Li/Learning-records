

/**
 * @description: 已知有一个有序的数组 ，在从小到大排序规则 有序的插入随机数
 * @param {*splice} 起始位置 删除数 插入元素
**/

type ArrType =  Array<number>
const Arr:ArrType = [1,4,5,6,7,9],  //有序数组
                 x = 8,       //需要插入的元素
                 b = Arr.find(m => m > x), //大于元素的第一项
                 idx = Arr.indexOf(b);  
                 
                 Arr.splice(idx === -1 ? Arr.length-1 : idx, 0, x)  

/**
 * @description: 无序数组 排序
 */

const unordArr:ArrType = [2,6,9,1,3,7,4,8,0,5];

const insert = (A:ArrType,i:number,x:number):void=>{
    let p = i-1;

    while(p >=0 && A[p] > x){
        A[p+1] = A[p]
        p--
    }

    A[p +1 ] = x
}

const insetionSort = (A:ArrType):void=>{
    for(let i=0;i<A.length;i++){
        insert(A,i,A[i])
    }
}
insetionSort(unordArr)
