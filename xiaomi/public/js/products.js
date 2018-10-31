// 模糊查询数据库
 var pno=0;
function loadPage(pno=0){   //默认值为零
  if(location.search.indexOf("kw=")!=-1){
    var kw=decodeURI(location.search.split("=")[1])
  };
  $.ajax({
    url:"products/list",
    type:"GET",
    data:{kw,pno},
    dataType:"json",
    success:function(res){
      new Vue({
        el:".content",
        data:{
          res
        },
        created(){
        },
        mounted(){
           //商品查询列表分页按钮
          var $ul=$(".content .p_btn ul");
          if(pno==0){
          $ul.children(":first").addClass("disbtn")
          .next().addClass("active")
          }else{
            $ul.children(":first").removeClass("disbtn")
          }
          if(pno==res.pageCount-2){
          $ul.children(":last").addClass("disbtn")
        }else{
          $ul.children(":last").removeClass("disbtn")
        }
          $ul.children().click(function(){
            var $this=$(this);
            if (!$this.is(".disbtn,.actve")){
              if ($this.html()=="上一页"){
                var pno=$this.siblings(".active").html()-2;
                $this.siblings(".active").removeClass("active")
                .prev().addClass("active");
              }else if ($this.html()=="下一页"){
                var pno=$this.siblings(".active").html();
                $this.siblings(".active").removeClass("active")
                .next().addClass("active");
              }else{
                var pno=$this.html()-1;
                $this.siblings(".active").removeClass("active")
                $this.addClass("active");
              }
              loadPage(pno);
            }
          })
        }
      })
    }
  })
};loadPage();
$("a").click(function(e){
  e.preventDefault();
})

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
    $(".more .more_list ul").css("marginLeft",-1230)
    $(this).addClass("active")
    .siblings().removeClass("active")
  })
})