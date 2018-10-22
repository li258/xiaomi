// 多级菜单导航标签实现
$(".p_mune .move_floor:first-child span.click").click(function(){
  var $last=$(this).prev();
  // console.log($last.css("height")=="45px");
  if ($last.css("height")=="45px"){
    $last.css("height","90")
  }else{
    $last.css("height","45")
  }
})
$(".p_mune .move_floor:nth-child(2) span.click").click(function(){
  var $last=$(this).prev();
  // console.log($last.css("height")=="45px");
  if ($last.css("height")=="45px"){
    $last.css("height","135")
  }else{
    $last.css("height","45")
  }
})

// var pno=0;
// function loadPage(pno=0){   //默认值为零
//   if(location.search.indexOf("kw=")!=-1){
//     var kw=decodeURI(location.search.split("=")[1])
//   };
new Vue({
  el:".content",
  data:{
    res:[],
  },
  created(){
    (async function(self){
      var res=await axios.get(    //axios请求是异步的
        "http://127.0.0.1:3000/products/list"
      );
      self.res=res.data;
      // console.log(res);
    })(this)
  },
  methosd:{

  }
})
$(function(){
  //商品列表
  $(".p_list .p_item").mouseover(function(){
    $(this).children(".actions").show()
    .css({top:15,opacity:1})
  })
  $(".p_list .p_item").mouseout(function(){
    $(this).children(".actions").hide()
    .css({top:0,opacity:0})
  })
  // 您还看了 购物车按钮
  var $shop_btn=$(".more_list ul li div a");
  $shop_btn.hide()
  console.log($(".more .more_list ul li").children("div").children("p:nth-child(4)"));
  $(".more .more_list ul li").mouseover(function(){
    $(this).children("div").children("p:nth-child(4)").hide()
    .css({top:-30,opacity:0})
    .next().show()
    .css({top:0,opacity:1})
  })
  $(".more .more_list ul li").mouseout(function(){
    $(this).children("div").children("p:nth-child(4)").show()
    .css({top:0,opacity:1})
    .next().hide()
    .css({top:0,opacity:0})
  })
  //您还看了 翻页按钮
  $(".more .chat div:first-child").click(function(){
    $(".more .more_list ul").css("marginLeft",0)
    $(this).addClass("active")
    .siblings().removeClass("active")
  })
  $(".more .chat div:last-child").click(function(){
    $(".more .more_list ul").css("marginLeft",-123)
    $(this).addClass("active")
    .siblings().removeClass("active")
  })
})