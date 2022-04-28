/*
 * @Author: your name
 * @Date: 2022-04-27 17:34:09
 * @LastEditTime: 2022-04-27 17:37:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \test\react18-feature\vite.config.js
 */

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
    plugins:[reactRefresh()]
})