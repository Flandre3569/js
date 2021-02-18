function animate(obj,target,callback){
    //先清除一次定时器，防止点击按钮时重复调用
     clearInterval(obj.timer);
     obj.timer=setInterval(function() {
         var step=(target-obj.offsetLeft)/10; 
         //js中出现小数会有误差，所以去除误差的方法就是向上取整
         //两个是因为当往回走的时候也需要判断位置
         step=step>0?Math.ceil(step):Math.floor(step);
         if(div.offsetLeft==target){
             clearInterval(obj.timer);
             //设定一个回调函数判断，如果有回调函数，则执行回调函数
             if(callback){
                 callback();
             }
         }
         obj.style.left=obj.offsetLeft+step+'px';
     }, 15);
 }