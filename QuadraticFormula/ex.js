var a,b,c,d,x,y;

a = prompt("aを入力してください"); 
b = prompt("bを入力してください");
c = prompt("cを入力してください");
d = b*b - 4 * a * c;

if (d > 0) {
  x = (-b + Math.sqrt(d))/2*a;
  y = (-b - Math.sqrt(d))/2*a;
  alert("解は二つ存在し、"+ x +"と"+ y+"である");

} else if( d = 0) {
	x = (-b)/2*a;
  alert("解は一つしか存在せず、"+x+"である");
  
} else {
  alert("解は存在しない");
}
    

