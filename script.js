//your JS code here. If required.

function updateclock() {
	const currTime = new Date();
	const hours = currTime.getHours();
	const minutes = currTime.getMinutes();
	const seconds = currTime.getSeconds();


	var clockDiv = document.getElementById("clock");
	clockDiv.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
}