// 替换脚部信息
$.ajax({
  type:"GET",
  url:"footer.html",
  success:function(res){
    $(res).replaceAll("#footer");
  }
})