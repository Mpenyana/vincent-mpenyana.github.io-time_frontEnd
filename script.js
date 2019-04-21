
const seconds = document.getElementById('seconds');
const conv = document.querySelector("h2");



seconds.addEventListener('input', (event) => {
	mins = seconds.value/60;
	if(seconds >= 0 || (mins >= 0 && mins <= 59)){
		conv.textContent = parseInt(seconds.value/3600) + "H " + parseInt(mins) + "M " + seconds.value % 60 + "S "; 
	}

	else{
		conv.textContent = parseInt(mins/60) + "H " + parseInt(mins % 60) + "M " + parseInt(seconds.value % 60) + "S" ;
	}
})