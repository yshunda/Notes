<a href="javascript:alert('清除成功');">清除缓存</a> //清除缓存
 //文本框
 var inpQQ = document.getElementById("inp1");
 var inpMobile = document.getElementById("inp2");
 var inpEmail = document.getElementById("inp3");
 var inpTel = document.getElementById("inp4");
 var inpName = document.getElementById("inp5");
 //规则
 //QQ的规律 5到12位的数字 QQ的是非0的数字
 //var regQQ = /^[^0]\d{4,11}$/;
 var regQQ = /^[1-9]\d{4,11}$/;
 //手机 11位数字
 //var regMobile = /^\d{11}$/;//这样的判断已经很好了
 //手机号码 有号段的规定 13[0-9] 14[57] 15[0-9] 17[0-9] 18[0-9]
 var regMobile = /^(13[0-9]|14[57]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
 //邮箱
 //123123123@126.com
 //var regEmail = /^\w+@\w+\.\w+$/;
 var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 //var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

 var regTel = /^0\d{2,3}-\d{7,8}$/;//座机
 var regName = /^[\u4e00-\u9fa5]{2,6}$/;//两个以上的汉字

 check(inpQQ, regQQ);
 check(inpMobile, regMobile);
 check(inpEmail, regEmail);
 check(inpTel, regTel);
 check(inpName, regName);

 function check(inp, reg) {
     inp.onblur = function () {
         if (reg.test(this.value)) {
             this.nextSibling.innerHTML = "正确";
             this.nextSibling.className = "right";
         } else {
             this.nextSibling.innerHTML = "错误";
             this.nextSibling.className = "wrong";
         }
     };
 }