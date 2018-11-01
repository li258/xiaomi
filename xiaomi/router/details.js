const express=require("express");
const router=express.Router();
const pool=require("../pool");

//details
router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var obj={product:{},specs:[]};
  (async function(){
    // 1.按照lid查找一个商品的信息——异步
    var sql="SELECT * FROM xm_product WHERE lid=?";
    await new Promise(function(open){
      pool.query(sql,[lid],(err,result)=>{
        if (err) throw err;
        obj.product=result[0];
        open();
      })
    })
    // 2.按照lid查询同系列共有几种不同型号，颜色——异步
    var sql=`SELECT lid,details,color,img_url,price FROM xm_product 
    WHERE family_id=(
      SELECT family_id FROM xm_product WHERE lid=?)`;
    await new Promise(function(open){
      pool.query(sql,[lid],(err,result)=>{
        if (err) throw err;
        obj.specs=result;
        open();
      })
    })
    res.writeHead(200,{"Access-Control-Allow-Origin":"*"})
    res.write(JSON.stringify(obj))
    res.end();
  })()
});
module.exports=router;