
const btn = document.querySelector("button");
btn.addEventListener('click',()=>{

 const fv = document.getElementById("f");
 const n1 = Number(fv.value);
const sv = document.getElementById("s");
const n2  = Number(sv.value);
 const res = n1+n2;
//  output
const r = document.getElementById("res");
r.innerText=res;

})

