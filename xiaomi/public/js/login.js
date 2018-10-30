// 登录状态切换
var $ul=$(".login_tabs ul");
$ul.children(":first").click(function(){
  $(this).children().addClass("active")
  $(this).next().children().removeClass("active")
  $("#content1").show()
  $("#content2").hide()
})

$ul.children(":last").click(function(){
  $(this).children().addClass("active")
  $(this).prev().children().removeClass("active")
  $("#content2").show()
  $("#content1").hide()
})
// 注册窗口
$(".new").hide()
$("#content1 .add").click(function(){
  $(".new").show()
  .css({opacity:1,top:15})
})
$(".new .return").click(function(){
  $(".new").css({top:0,opacity:0})
  .hide()
})

//注册协议点击
var xybtn=$('.new .new_list p em');
xybtn.click(function(){
  xybtn.toggleClass("active");
})

//登录验证
var uname=$("#content1 form input:first-child");
var upwd=$("#content1 form input:nth-child(2)");
var  login=$("#content1 form input:last-child");
login.click(function(){
  if (!uname.uname=="111"){
    uname.focus();
  }else if (!upwd.upwd==123456){
    upwd.focus();
  }else{
    login.submit();
  }
})