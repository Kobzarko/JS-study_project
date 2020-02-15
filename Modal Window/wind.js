
// Modal 

window.addEventListener('DOMContentLoaded', function() {
  'use strict';


	 // our variables
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
		// create our window
	more.addEventListener('click', ()=>{
		overlay.style.display = 'block';   // window has appear style after click
		this.classList.add('.more-splash'); //add class animation for this button 
		document.body.style.overflow = 'hidden'; // stop scroll site page
	});

	// close our window
	close.addEventListener('click', ()=>{
		overlay.style.display = 'none';    // button has block style after click
		more.classList.remove('.more-splash'); // remove classList animation for this button 
		document.body.style.overflow = '';  // can scroll page
	});


	// if you want to cancel to scroll page add this code row
	// document.body.style.overflow = 'hidden'; // stop scroll site page
	// document.body.style.overflow = '';  // can scroll page



});