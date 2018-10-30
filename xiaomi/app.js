//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
//引入跨域模块
const cors=require("cors");
/*引入路由模块*/
var header=require("./router/header");
var index=require("./router/index");
var products=require("./router/products");
var shoppingcar=require("./router/shoppingcar");


var app = express();
app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//加载处理跨域模块
app.use(cors({
  origin:["http://127.0.0.1:3000","http://localhost:3000"],
  credentials:true
}));
//托管静态资源到public目录下
app.use(express.static(__dirname+'/public'));
/*使用路由器来管理路由*/
app.use("/header",header);
app.use("/index",index);
app.use("/products",products);
app.use("/shoppingcar",shoppingcar);
