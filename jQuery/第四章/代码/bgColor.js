(function ($) {
  //需要给jQuery的原型添加方法.
  $.fn.bgColor = function (color) {
    //console.log(this); //this是调用这个bgColor方法的jQuery对象.
    this.css("backgroundColor", color)

    //返回调用这个方法的jQuery本身
    return this
  }
}(jQuery))