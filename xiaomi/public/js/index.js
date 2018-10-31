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
// console.log(res);
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

//倒计时
function time(){
  var hour=new Date().getHours()+3;
  if (hour<10){hour="0"+hour}
  else if (hour>24){hour=3;}
  $('.flash_time').children(":first").text(`${hour}:00 场`);

  var strat=new Date().getTime()+3*60*60*1000-new Date().getMinutes()*60*1000-new Date().getSeconds()*1000;
  function setTime(){
    var end=new Date().getTime();
    var s=parseInt((strat-end)/1000);
    var $timer=$(".time_num");
    if (s>0){
      var h=parseInt(s/3600); //获得小时
      if (h<10){h="0"+h;}
      var m=parseInt(s%3600/60) //获得分钟
      if (m<10){m="0"+m;}
      s%=60;  //60的余数，获得秒
      if (s<10){s="0"+s;}
      $timer.children(":first")
      .html(`${h}`)
      .next().text(`${m}`)
      .next().text(`${s}`)
      // console.log(h);
      // console.log(m);
      // console.log(s);
      strat--;
    }else{
      strat=10799;
    }
  }
  setInterval(setTime,1000);
}; time();

// 滑动商品列表
    //dom加载完执行
  // 小米闪购
  var $flashList=$(".flashbuy>div.flash_list>ul");
  var $flashPrev=$(".flashbuy .list_btn button:first-child");
  var $flashNext=$(".flashbuy .list_btn button:last-child");
  var moved=0,lWidth=246;
  $flashPrev.click(function(){
    if (!$(this).hasClass(".disabled")){
      moved--;
      $flashList.css("marginLeft",-lWidth*moved);
      $flashNext.removeAttr("disabled")
      .removeClass("disabled");
      if (moved==0){
        $flashPrev.addClass("disabled")
        .attr({"disabled":"disabled"})
      }
    }
  })
  $flashNext.click(function(){
    if(!$(this).hasClass(".disabled")){
      moved++;
      $flashList.css("marginLeft",-lWidth*moved);
      $flashPrev.removeAttr("disabled")
      .removeClass("disabled")
      if ($flashList.children().length-4==moved){
        $flashNext.addClass("disabled")
        .attr({"disabled":"disabled"})
      }
    }
  })

  // 为你推荐
  var $suggestList=$(".home_suggest>div.flash_list>ul");
  var $suggestPrev=$(".home_suggest .list_btn button:first-child");
  var $suggestNext=$(".home_suggest .list_btn button:last-child");
  var sm=0,sw=246;
  $suggestPrev.click(function(){
    if (!$(this).hasClass(".disabled")){
      sm--;
      $suggestList.css("marginLeft",-sw*sm);
      $suggestNext.removeAttr("disabled")
      .removeClass("disabled")
      if (sm==0){
        $suggestPrev.addClass("disabled")
        .attr({"disabled":"disabled"})
      }
    }
  })
  $suggestNext.click(function(){
    if(!$(this).hasClass(".disabled")){
      sm++;
      $suggestList.css("marginLeft",-sw*sm);
      $suggestPrev.removeAttr("disabled")
      .removeClass("disabled")
      if ($suggestList.children().length-5==sm){
        $suggestNext.addClass("disabled")
        .attr({"disabled":"disabled"})
      }
    }
  })


