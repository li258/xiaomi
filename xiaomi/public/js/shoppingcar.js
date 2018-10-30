new Vue({
  el:".car",
  data:{
    res:[]
  },
  created(){
    (async function(self){
      var res=await axios.get(
        "http://127.0.0.1:3000/shoppingcar/list"
      );
      self.res=res.data;
    })(this)
  },
  methods:{
    
  }
})
$(function(){
// 实现总价动态初始加载
var car=function(){
var $total=$(".car_foot .foot_right .total");
var subs=$(".car_body .subtotal").children();
var num=0;
for( var sub of subs){
  var a=sub.innerHTML;  //for of 遍历不能调用JQ方法
  num+=parseFloat(a.slice(0,a.length-1));
}
$total.html(`${num}元`);

// 购物车按钮，改变价格
$(".car").click(function(e){
  if (e.target.tagName==="BUTTON"){
    var $btn=$(e.target);
    var $span=$btn.parent().children(":nth-child(2)");
//增加、减少
    var n=$span.html();
    if ($btn.html()=="+"){
      n++;
    }else if(n>1){
      n--;
    }
    $span.html(`${n}`);
//小计
    var sub=$btn.parent().parent().next().children();
    var price=sub.parent().prev().prev().children().html();
    var pic=price.slice(0,price.length-1);
    sub.html(`${pic*n}元`);
//总价
    var $total=$(".car_foot .foot_right .total");
    var subs=$(".car_body .subtotal").children();
    var num=0;
    for( var sub of subs){
      var a=sub.innerHTML;  //for of 遍历不能调用JQ方法
      num+=parseFloat(a.slice(0,a.length-1));
    }
    $total.html(`${num}元`);
  }
})
// 全选单选按钮实现
var charAll=$(".car_head .choose").children(":first-child");
var chars=$(".car_body .choose").children();
var charAdd=function(){
  chars.addClass("active");
}
var charRemove=function(){
  chars.removeClass("active");
}
charAll.click(function(){
  if (!charAll.hasClass("active")){
    charAll.addClass("active");
    charAdd();
  }else{
    charAll.removeClass("active");
    charRemove();
  }
})
// for (var char of chars){
  chars.click(function(){
    var $this=$(this);
    if (!$this.hasClass("active")){
      $this.addClass("active");
    }else{
      $this.removeClass("active");
    }
    var unchecked=$(".car_body .choose em:not(.active)");
    //商品数量计算
    var cnum=$(".car_foot .foot_left p span:nth-child(3)");
    cnum.html( chars.length-unchecked.length );
    if(unchecked.length==0){
      charAll.addClass("active");
    }else{
      charAll.removeClass("active");
    }
  })
  // }
  var fnum=$(".car_foot .foot_left p span:nth-child(2)");
  fnum.html( chars.length );
};car();
  // 删除某一行元素
  var del=$(".car_body .operate span");
  del.click(function(){
    var $this=$(this); 
    $this.parent().parent().remove();
    car();
  })
})
  
