$(function(){
  $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
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
    }
  })
})