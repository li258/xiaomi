$.ajax({
  type:"get",
  url:"header.html",
  success:function(res){
    $(res).replaceAll("#header");
    new Vue({
      el:".header_list",
      data:{
        res:[],
      },
      created(){
        //this->当前vue
        (async function(self){
          var res=await axios.get(    //axios请求是异步的
            "http://127.0.0.1:3000/header/list"
          );
          self.res=res.data;
          // console.log(res);
        })(this)  //这里把外边的this传进来使用，因为匿名函数自调的this指向的是全局，无法使用
      },
      methods:{
        getall(a){
          window.location.href="http://127.0.0.1:3000/details.html?lid="+a
        },
        search_click(){
          location.href=`http://127.0.0.1:3000/products.html?kw=${$input.val().trim()}`;  //.trim()去掉两端空字符，才能完整匹配
        }
      }
    })
    var $header_menu=$(".header_menu");
    // console.log($header_menu);
    $header_menu.hide();
    $("[data-trigger=dropdown]").parent()
    .mouseover(function(){
      // console.log($(this));
      $(this).children(":last").show()
      .css({left:0,opacity:1});
    })	
    .mouseout(function(){
      $(this).children(":last").hide()
      .css({left:-40,opacity:0});
    })	
    $(".ht_right>a").click(function(){
      window.location.href="http://127.0.0.1:3000/login.html"
    })
    // 购物车
    var $shopping_car=$(".shopping_car>div");
    $shopping_car.hide();
    $("span.shopping_car")
    .mouseover(function(){
      $shopping_car.show()
      .css({top:40,opacity:1});
    })	
    .mouseout(function(){
      $shopping_car.hide()
      .css({top:0,opacity:0});
    })
    $shopping_car.parent().click(function(){
      window.location.href="http://127.0.0.1:3000/shoppingcar.html"
    })
    
    //搜索
    $(function(){
      $search=$(".search .search_icon");
      var $input=$search.prev();
      // console.log($input.html());
      if (location.search.indexOf("kw=")!==-1){
        //location.search=?kw=macbook
        var kw=location.search.split("=")[1];
        $input.val(decodeURI(kw));   //decodeURI()编码解码
      }
    })
  }
})
