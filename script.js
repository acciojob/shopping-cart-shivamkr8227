//your code here
let ini=document.getElementById("item-name-input");
let ipi=document.getElementById("item-price-input");
let btnadd=document.getElementById("add");
let h3total=document.getElementById("total");
let tar=document.getElementById("tab");
let gt=0;
h3total.innerHTML="Grand Total: "+gt;
btnadd.addEventListener("click", function(){
	let trRow=document.createElement("tr");
	let trD1=document.createElement("td");
	let trD2=document.createElement("td");
	trD1.textContent=ini.value;
	trD2.textContent=ipi.value;
	trRow.appendChild(trD1);
	trRow.appendChild(trD2);
	tar.appendChild(trRow);
	gt=gt+parseInt(ipi.value);
	h3total.innerHTML="Grand Total: "+gt;
	ini.value="";
	ipi.value="";
});
