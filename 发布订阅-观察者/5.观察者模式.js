/*
 * @Author: your name
 * @Date: 2022-04-24 17:14:43
 * @LastEditTime: 2022-04-24 17:56:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\04-23\5.观察者模式.js
 */

/**
 * @description: 观察者必须基于发布订阅模式  (观察者 被观察者模式都是使用class)
 * @type {watcher} :vue2 中使用的就是观察者模式 watcher 
 * @type {@fn="fn"} : '@'订阅一个事件  emit发布事件
 */


class Subject {  //被观察者
    constructor(name){
        this.name = name
        this.state = 'happy'
        this.observers = []
    }

    attch(observer){
        this.observers.push(observer)
    }
    setState(newState){
        if(newState !== this.state){
            this.state = newState
            this.observers.forEach(m => m.update(this))
        }
    }
}

class Observer{  //观察者

    constructor(name) {
        this.name = name
    }
    update(subject){
        console.log('subject state',subject.state);
    }
}

 const baby = new Subject('Baby')
 const mother = new Observer('mother')
 const father = new Observer('father')
 baby.attch(mother)
 baby.attch(father)

 baby.setState('dread')

