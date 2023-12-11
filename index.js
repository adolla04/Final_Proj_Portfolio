// Initialize here and run showSlide() to give your lightbox a default state.
/*jslint white:true*/
/*jslint browser:true */
/*global document: false */
/*jslint node:true */
/* global require */
/*jslint plusplus: true */
var slideIndex = 1;
showSlide(slideIndex);

// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox() {
    "use strict";
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
    "use strict";
  document.getElementById('Lightbox').style.display = 'none';
}

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
    "use strict";
  showSlide(slideIndex === n);
}

function toSlide(n) {
    "use strict";
  showSlide(slideIndex === n);
}

// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.

function showSlide(n) {
    "use strict";
  var slides = document.getElementsByClassName('slide'), modalPreviews = document.getElementsByClassName('modal-preview'), i;

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }


  for( i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for( i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  }
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
}