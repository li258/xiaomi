(async function(){
  if (location.search.indexOf("lid=")!=-1){
    var lid=location.search.split("=")[1];
    $.ajax({
      url:"details/",
      type:"get",
      data:`lid=${lid}`,
      dataType:"json",
      success:function(res){
        new Vue({
          el:".d_main",
          data:{
            res:[]
          },
          mounted(){
            
            console.log(res.product.img_url);
          }
        })
      }
    });
  }
  // 登录提示关闭
  $(".close").click(function(){
    $(this).parent().parent().hide()
  })

  // 放大镜
  var $big=$(".d_main .d_left .big");
  var $max=$(".d_main .d_left .max");
  var mx=$big.children(":first").attr("src");
  $max.css("backgroundImage",`url(${mx})`);
  $max.css("backgroundSize",`200% 200%`);
  var $mask=$(".d_left .big .mask"),$onbig=$(".d_left .big .onbig");
  var msize=200,smsize=400,max=smsize-msize;
  $onbig.hover(function(){
    $mask.toggleClass("none");
    $max.toggleClass("none");
  }).mousemove(function(e){
    var top=e.offsetY-msize/2;
    var left=e.offsetX-msize/2;
    if (top<0){top=0;}else if (top>max){top=max;}
    if (left<0){left=0;}else if (left>max){left=max;}
    $mask.css({top,left});
    $max.css("backgroundPosition",`${-2.5*left}px ${-2.5*top}px`)
  })
  //页面滚动，浮动元素
  $(window).scroll(function(){
    if ($(window).scrollTop()>150){
      $(".nav_top").show()
      .css({top:18,opacity:1})
    }else{
      $(".nav_top").hide()
      .css({top:-10,opacity:0})
    }
    if ($(window).scrollTop()<200){
      $(".over").css({position:"relative",top:10})
    }
    if ($(window).scrollTop()>200){
      $(".over").css({position:"fixed",top:140})
    }
    if ($(window).scrollTop()>1000){
      $(".over").css({position:"relative",top:800})
    }
  })

})()

