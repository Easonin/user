// 引入包
const express = require('express')

const bodyParser = require('body-parser')
// 实例化服务器
const app = express()
// 定义接口
const port = 3000
// 解析post请求
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 模拟数据库中的数据
let user = [
  {
    id: 1,
    name: 'admin',
    age: 53
  },
  {
    id: 2,
    name: 'admin',
    age: 23
  }
  ,
  {
    id: 3,
    name: 'admin',
    age: 98
  }
]

// 获取
app.get('/', (req, res) => {
  console.log(req.query);
  let id = req.query.id
  let arr = user.filter(item => item.id == id)
  res.send({
    msg: '获取成功',
    code: 200,
    data: arr
  })
})

//添加
app.post('/', (req, res) => {
  let data = req.body
  user.push(data)
  res.send({
    message: '添加成功',
    code: 200,
    data: user
  })
})



app.listen(port, () => {
  console.log(`创建${port}服务器成功`)
})
