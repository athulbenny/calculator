var b=0;

var btn1=document.getElementById('btn1');
btn1.addEventListener('click',addvalue1)
var btn2=document.getElementById('btn2');
btn2.addEventListener('click',addvalue2)
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
var btn5=document.getElementById('btn5');
var btn6=document.getElementById('btn6');
var btn7=document.getElementById('btn7');
var btn8=document.getElementById('btn8');
var btn9=document.getElementById('btn9');
var btn0=document.getElementById('btn0');
var num1=document.getElementById('num1');

function addvalue1(){
   var a=btn1.innerHTML;
   a=parseInt(a)
   b=(b*10)+a;
   num1.value=b;
}
function addvalue2(){
   var a=btn2.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   num1.value=b;
}

