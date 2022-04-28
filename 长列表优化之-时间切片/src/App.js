/*
 * @Author: your name
 * @Date: 2022-04-27 00:28:08
 * @LastEditTime: 2022-04-27 12:44:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react\my-app\src\App.js
 */
import './App.css';
import { PureComponent}from 'react'

// function App() {
//   return (
//     <div className="App">
//       APP
//     </div>
//   );
// }

class App  extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }

  timeSlice=(times)=>{
    // requestAnimationFrame 在浏览器渲染之前执行
    // requestIdleCallback   在浏览器空闲时执行 不会阻塞优先级较高的工作
    requestAnimationFrame(()=>{
      times -= 100
      this.setState({
        list:[...this.state.list,...new Array(100).fill(0)]
      },()=>{
        if(times>=0){
          this.timeSlice(times)
        }
      })
    })
  }

  handleClickLoad=()=>{
    this.timeSlice(550)


    
    // const startTime = Date.now()
    // this.setState({
    //    list:Array(30000).fill(0)
    // },()=>{
    //   console.log(Date.now() - startTime);
    // })
  }
  render(){
    return (
      <div>
          <button onClick={this.handleClickLoad}>加载</button>
        <ul>
          {
             this.state.list.map((m,i)=>{
                return  <li key={i}>{i}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
