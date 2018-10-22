const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/list",(req,res)=>{
  // var kw=req.query.kw;
  // var kws=kw.split(" ");
  var pno=req.query.pno;
  pno=0;  
  // //将title like ‘% %’ 拼入数组
  // kws.forEach((elem,i,kws)=>{
  //   kws[i]=` title liske '%${elem}%' `; 
  // });
  // //在每个条件前边添加where 和后边添加 and  
  // var where=` where ${kws.join(" and ")} `;
  var sql=`SElECT lid,family_id,pname,price,details,img_url FROM xm_product`;
  // sql+=where;
  pool.query(sql,(err,result)=>{
    if (err) throw err;
    // data={};  //新建查询结果对象
    // // data.pno=req.query.pno; //在结果对象中添加pno属性
    // data.pageCount=Math.ceil(result.length/14);//用查询结果的总数/14，上取整，获得总页数，放入结果data中
    // data.products=result.slice(pno*14,pno*14+14);    //仅截取查询结果中的pno*9还是的9条记录，放入data中
    res.send(result);
  })
})
module.exports=router;