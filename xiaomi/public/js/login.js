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
