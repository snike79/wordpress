function DOMContentLoaded() {
	document.getElementById('spanCountdown').textContent=timer+" Sekunden";
	count(timer); 
}

function countdown(zahl){ 
	if (isCancelled)
		return;
		
	if (zahl > 1) {  
		// über 1 Sekunde hinaus -> x Sekunden 
		document.getElementById('spanCountdown').textContent=zahl+" Sekunden"; 
		count(zahl);             
    } else if (zahl == 1) {  
		// 1 Sekunde 
		document.getElementById('spanCountdown').textContent=zahl+" Sekunde"; 
		count(zahl);             
    } else {  
		// Countdown abgelaufen
		document.getElementById('spanCountdown').textContent="0 Sekunden"; 
		window.location.href='https://snike79.wordpress.com/';
    } 
} 
 
function count(countzahl) { 
	if (isCancelled)
		return;
		
	countzahl=countzahl-1; 
    setTimeout("countdown("+countzahl+");",1000);             
} 

function abbrechen(){
	document.getElementById("spanText").textContent = " ";
	isCancelled = true;
}

var timer=10;
var isCancelled = false;

document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
