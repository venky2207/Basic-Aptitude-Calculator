function Functionud(){
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	let rem=1;
       rem = (a ** b) % 10;
		document.getElementById("rem").innerHTML = "unit digit of a^b is "+rem;
	}
function Functionrm(){
	var c=document.getElementById("c").value;
	var d=document.getElementById("d").value;
	var r,q;
	if(d==0){
		r="Not Defined";
		q="Not Defined";
	}
	else{
		q=Math.floor(c/d);
		r=c%d;
	}
	document.getElementById("q").innerHTML="Quotient:"+q;
	document.getElementById("r").innerHTML="Remainder:"+r;
}
function Functionqe(){
	var e=document.getElementById("e").value;
	var f=document.getElementById("f").value;
	var g=document.getElementById("g").value;
	var r1,r2;
	let discriminant = f * f - 4 * e * g;
    if (discriminant > 0) {
    r1 = (-f + Math.sqrt(discriminant)) / (2 * e);
    r2 = (-f - Math.sqrt(discriminant)) / (2 * e);
    document.getElementById("r1").innerHTML="root1:"+r1;
	document.getElementById("r2").innerHTML="root2:"+r2;
    }
    else if (discriminant == 0) {
    r1 = r2 = -f / (2 * e);
    document.getElementById("r1").innerHTML="root1:"+r1;
	document.getElementById("r2").innerHTML="root2:"+r2;
    }
    else {
    let realPart = (-f / (2 * e)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * e)).toFixed(2);
    var r1 = realPart.toString();
    var r2 =imagPart.toString();
    document.getElementById("r1").innerHTML="root1:"+ r1 +"+"+ r2 + 'i';
	document.getElementById("r2").innerHTML="root2:"+ r1 +"-"+ r2 + 'i';
    }
}
function Functionnz(){
	var h=document.getElementById("h").value;
	let count=0;
	if(h<0){
		count=0;
	}
		for(let i=5;Math.floor(h/i)>=1;i*=5){
			count+=Math.floor(h/i);
		}
	document.getElementById('z').innerHTML=count;
}