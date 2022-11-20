function fixture() {
	let data="<span>&nbsp&nbsp&nbsp3.42</span><br><span> QATAR </span>";
document.getElementById('teamA').innerHTML=data;
let data1="<span>&nbsp&nbsp&nbsp2.43</span><br><span>ECUADOR</span>";
document.getElementById('teamB').innerHTML=data1;
document.getElementById('teamA').style.display="block"
document.getElementById('teamB').style.display="block"
}
function profilemenu() {
	document.getElementById('profile-menu').style.display="block"
	document.getElementById('livesoccer').style.display="none"
	document.getElementById('profile').style.display="none"
	document.getElementById('profile1').style.display="block"
}
function profilemenu1() {
	document.getElementById('profile-menu').style.display="none"
	document.getElementById('livesoccer').style.display="block"
	document.getElementById('profile').style.display="block"
	document.getElementById('profile1').style.display="none"
}
function pay() {
	confirm('you are leaving this app to proceed with payments');
	open('https://buy.stripe.com/test_cN28wD3RpflaebKdQS')
}
function pay1() {
	confirm('you are leaving this app to proceed with payments');
	open('https://buy.stripe.com/test_cN28wD3RpflaebKdQS')
}
function withdraw() { 
	prompt('what\'s your username')
	confirm("YOUR REQUEST HAS BEEN SENT TO OXBOW BET .\n PLEASE WAIT WHILE WE CONFIRM PAYMENTS.\n THIS CAN TAKE UPTO 24HOURS \(ONE DAY\).\nTHANK YOU FOR YOUR PATIENCE!")
}
function image() {
	let image=document.getElementById('imgsrc');
		image.display();
	document.getElementById('image').innerHTML=image;
}
