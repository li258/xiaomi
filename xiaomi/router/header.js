const express=require("express");
const router=express.Router();
const pool=require("../pool");

//header
router.get("/list",(req,res)=>{
  var sql=`SELECT lid,family_id,pname,price,img_url FROM xm_product`;
  pool.query(sql,(err,result)=>{
    if (err) throw err;
    res.send(result);
  })
})


module.exports=router;