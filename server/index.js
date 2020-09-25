// 引入 express
const express = require("express")

const app = express()

app.set('secret','abc123')

app.use(require('cors')())  //跨域模块
app.use(express.json())  // 中间件 post请求解析为json
app.use('/admin', express.static(__dirname + '/admin')) //托管静态文件（图片）
app.use('/', express.static(__dirname + '/web')) //托管静态文件（图片）
app.use('/uploads', express.static(__dirname + '/uploads')) //托管静态文件（图片）

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000,() => {
    console.log('http://localhost:3000');
});