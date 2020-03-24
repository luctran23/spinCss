var spin = document.getElementById('spin');
	console.log(spin);

	    
function onRotate() {
	spin.style.transform = 'rotate(25deg)';
	    spin.style.transform = 'rotate(50deg)';
	    spin.style.transform = 'rotate(75deg)';
	    spin.style.transform = 'rotate(100deg)';
	    spin.style.transform = 'rotate(125deg)';
	    spin.style.transform = 'rotate(150deg)';
	    spin.style.transform = 'rotate(180deg)';
	    spin.style.transition = '1s';
}

onRotate();