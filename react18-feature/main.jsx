/*
 * @Author: your name
 * @Date: 2022-04-27 17:38:41
 * @LastEditTime: 2022-05-01 19:18:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\react18-feature\main.jsx
 */

import React from "react";
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import OldBatchUpdate from './oldPatchUpdate'
import NewPatchUpdate from './newPatchUpdate'

const root = document.getElementById('root')


// const element = <OldBatchUpdate/>  //老版本批量更新策略
// render(oldBatchUpdate,root)  

const element = <NewPatchUpdate/> //新版本批量更新策略
createRoot(root).render(element)