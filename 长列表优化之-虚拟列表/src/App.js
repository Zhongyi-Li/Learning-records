/*
 * @Author: your name
 * @Date: 2022-04-27 00:28:08
 * @LastEditTime: 2022-05-01 00:43:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react\my-app\src\App.js
 */
import './App.css';
import { Fragment, PureComponent}from 'react'
import VirtualList from './VirtualList'
class App  extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }
  
  render(){
    const data = Array(30).fill(0)
    return (
      <Fragment>
        <VirtualList
         width={'100%'}
         heigh={500}
         itemCount={data.length}
         itemSize={50}
         renderItem={(data)=>{
           let {index,style} = data
           return (
             <div key={index} style={{...style,backgroundColor: index%2 ==0 ? 'blue' :'pink'}}>
               {index+1}
             </div>
           )
         }}
        />
      </Fragment>
    )
  }
}

export default App;
