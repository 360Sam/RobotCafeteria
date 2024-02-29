window.onload = function() {
	document.getElementById("calc").addEventListener("click", function(event){
		event.preventDefault();
		calc();
		return false;
	});
	document.getElementById("manual").addEventListener("click", function(event){
		event.preventDefault();
		popOpen('manual.html');
		return false;
	});
	
	document.getElementById("story").addEventListener('click',function(event){
		event.preventDefault();
		document.getElementById("lightbox").style.display='inline';
		return false;
	});
	document.getElementById("lightbox").style.display='inline';
};

function calc() {
  //STORE FORM INPUTS AS JS VARIABLES
  var S = document.getElementById("S").value;
  var C = document.getElementById("C").value;
  var L = document.getElementById("L").value;
  var P_text = document.getElementById("P_formula").value;
  var D_text = document.getElementById("D_formula").value;
  var R_text = document.getElementById("R_formula").value;

	
  //CONVERT FORMULAS TO JS SYNTAX, EVALUATE, PUSH VALUES TO OUTPUT FIELDS
  try {
	
  	var P = eval(rectify(P_text));
    document.getElementById("P").value = String(Math.round(P));
  } catch(err) {
  	document.getElementById("P").value = "ERROR";
  }
  try {
  	var D = eval(rectify(D_text));
    document.getElementById("D").value = String(D.toFixed(2));
  } catch(err) {
  	document.getElementById("D").value = "ERROR";
  }
  try {
  	var R = eval(rectify(R_text));
    document.getElementById("R").value = String(R.toFixed(2));
  } catch(err) {
  	document.getElementById("R").value = "ERROR";
  }
}

function popOpen(url) {
	window.open(url,'page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=950,height=600,left=50,top=50,titlebar=yes');
}
function rectify(text) {
	text = text.toUpperCase();
	text = text.replace(/S\+/gmi,"(S*1)+");
	text = text.replace(/C\+/gmi,"(C*1)+");
	text = text.replace(/L\+/gmi,"(L*1)+");
	text = text.replace(/P\+/gmi,"(P*1)+");
	text = text.replace(/D\+/gmi,"(D*1)+");
	text = text.replace(/R\+/gmi,"(R*1)+");
	
	text = text.replace(/rounddown\(/gmi,"Math.floor(");
	text = text.replace(/roundup\(/gmi,"Math.ceil(");
	text = text.replace(/round\(/gmi,"Math.round(");
	text = text.replace(/absolute\(/gmi,"Math.abs(");
	text = text.replace(/power\(/gmi,"Math.pow(");
	text = text.replace(/root\(/gmi,"Math.sqrt(");
	text = text.replace(/max\(/gmi,"Math.max(");
	text = text.replace(/min\(/gmi,"Math.min(");
	return text;
}