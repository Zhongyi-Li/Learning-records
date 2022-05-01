/*
 * @Author: your name
 * @Date: 2022-05-01 18:14:26
 * @LastEditTime: 2022-05-01 19:16:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\react18-feature\newPatchUpdate.jsx
 */
/**
 * @description: 新版本中18的批量更新逻辑： 依赖于当前更新事件的优先级 ，与老版本中不同的是异步任务中也做了批量更新
 */

 let updateQueue = []
 let state = { num:0}
 let inputPriority = 1   //输入优先级 数字越小优先级越高
 let normalPriority = 2  //普通优先级
 let lastPriority ;
 
 function setState(newState,priority){
         updateQueue.push(newState)
         if(lastPriority === priority){
             return
         }
         lastPriority = priority
         setTimeout(()=>{
             updateQueue.forEach(newData=>{
                 state = newData
                 updateQueue = []
             })
         })
 }
 function handleClick(){
     setState({num:state.num +1},inputPriority)
     setState({num:state.num +1},inputPriority)
     setTimeout(()=>{
        setState({num:state.num +1},normalPriority)
        setState({num:state.num +1},normalPriority)
     })
 }
 

 
 
 class newdPatchUpdate extends React.Component{
     state= { num:0}
     handleClick=()=>{
         this.setState({num:this.state.num+1})
         console.log(this.state.num);
         this.setState({num:this.state.num+1})
         console.log(this.state.num);
         setTimeout(()=>{
            this.setState({num:this.state.num+1})
            console.log(this.state.num);
            this.setState({num:this.state.num+1})
            console.log(this.state.num);
         })
         //打印Log结果为 0023
     }
     render(){
         return (
             <div>
                 <p>{this.state.num}</p>
                 <button onClick={this.handleClick}>+</button>
             </div>
         )
     }
 }
 