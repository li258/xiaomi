$(function(){
  new Vue({
    el:"#main",
    data:{
      res:[]
    },
    created(){
      (async function(self){
        var res=await axios.get(    //axios请求是异步的
          "http://127.0.0.1:3000/index/list"
        );
        self.res=res.data;
      })(this)
    },
    methods:{

    }
  })
  // 轮播导航按钮实现
  var $hero_menu=$(".hero_menu");
  $hero_menu.hide()
  $("[data-trigger=dropright]").parent()
  .mouseover(function(){
    // console.log($(this).children(":last"));
    $(this).children("[class=hero_menu]").show()
    .css({top:0,opacity:1})
  })
  .mouseout(function(){
    $(this).children("[class=hero_menu]").hide()
    .css({top:50,opacity:0})
  })
  // 轮播图
  var $slider=$(".home_slider");
  // console.log($slider.children(['opacity:1']));
  var i=0;
  setInterval(function(){
    var $pp1=$(`<img src="img/banner${i+1}.jpg" alt="">`);
    $slider.children([":eq("+i+")"]).css({opacity:0,left:50})
    // console.log($pp1);
    $slider.append($pp1)
    $slider.children(":first").remove()
    i=i+1;
    if (i==4){i=0;}
  },3000)
})