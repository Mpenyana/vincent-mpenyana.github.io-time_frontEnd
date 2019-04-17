
var seconds = document.getElementById('seconds');
var conv = document.querySelector("h2");



seconds.addEventListener('input', function(event){
	mins = seconds.value/60;
	if(seconds >= 0 || (mins >= 0 && mins <= 59)){
		// console.log("hours: ", parseInt(seconds.value/3600))
		// console.log("these are the seconds: ", seconds.value % 60)
		// console.log("these are the minutes from seconds", mins)
		conv.textContent = parseInt(seconds.value/3600) + "H " + parseInt(mins) + "M " + seconds.value % 60 + "S "; 
	}

	else{
		console.log("these are the hours: ", parseInt(mins/60))
		console.log("these are the minutes: ", parseInt(mins % 60))
		conv.textContent = parseInt(mins/60) + "H " + parseInt(mins % 60) + "M " + parseInt(seconds.value % 60) + "S" ;
	}
})