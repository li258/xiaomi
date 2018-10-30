const express=require("express");
const router=express.Router();
const pool=require("../pool");

//car
router.get("/list",(req,res)=>{
  var sql=`SELECT lid,pname,details,price,img_url,color FROM xm_product`;
  pool.query(sql,(err,result)=>{
    if (err) throw err;
    res.send(result);
  })
})
module.exports=router;