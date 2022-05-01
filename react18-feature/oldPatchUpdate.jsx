/*
 * @Author: your name
 * @Date: 2022-05-01 18:14:26
 * @LastEditTime: 2022-05-01 18:59:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\react18-feature\oldPatchUpdate.jsx
 */
/**
 * @description: 老版本中的批量更新逻辑
 */

let isBatchngUpadate = false
let updateQueue = []
let state = { num:0}

function setState(newState){
    if(isBatchngUpadate){
        updateQueue.push(newState)
    }else{
        //宏任务中的setState
        state = newState
    }
}
function handleClick(){
    setState({num:state.num +1})
    setState({num:state.num +1})
    setTimeout(()=>{
       setState({num:state.num +1})
       setState({num:state.num +1})
    })
}

function batchedUpdate(fn){
    isBatchngUpadate = true   //开启批量更新模式
    fn()
    isBatchngUpadate = false  //关闭批量更新
    updateQueue.forEach(newState=>{
        state = newState
    })
    updateQueue = [] //清空更新队列
}

batchedUpdate(handleClick)


class OldPatchUpdate extends React.Component{
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

export default OldPatchUpdate