/*
 * @Author: your name
 * @Date: 2022-04-30 22:08:58
 * @LastEditTime: 2022-04-30 23:44:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\长列表优化之-虚拟列表\src\VistualList.js
 */

import React, { PureComponent } from "react";

class VistualList extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            start:0
        }
        scrollBox = React.createRef()
    }
    
    handleScroll=()=>{
        const { itemSize } = this.props
        const { scrollTop } = this.scrollBox.current
        const start = Math.floor(scrollTop / itemSize)
        this.setState({
            start,
        })
    }

    render(){ 
        /**
         * @description: 虚拟列表
         * @param {* itemCount} item总条数 
         * @param {*itemSize}   item条目宽高
         */        
        const { height,width,itemCount,itemSize,renderItem } = this.props
        const { start } = this.state
        let end = start + Math.floor(height/itemSize)+1
            end = end > itemCount ? itemCount : end;
        const visibleList = new Array(end - start ).fill(0).map((x,i)=> ({index:i+start }))
        const itemStyle = {position:'absolute',left:0,width:'100%',height:50}

        return (
            <div style={{overflow:'auto',willChange:"transform",height,width,}} ref={this.scrollBox} onScroll={this.handleScroll}>
                <div style={{position:'relative',width:'100%',height:`${itemSize * itemCount}px`}}>
                {
                    visibleList.map((x,i)=> renderItem({index,style:{...itemStyle},top:i*itemSize} ))
                }
                </div>
            </div>
        )
    }
}