function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let slideIndex5 = 1;


showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}


// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}


function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}

function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");
    let dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides3.length }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].className += " active";
}


function showSlides4(n) {
    let i;
    let slides4 = document.getElementsByClassName("mySlides4");
    let dots4 = document.getElementsByClassName("dot4");
    if (n > slides4.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = slides4.length }
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[slideIndex4 - 1].style.display = "block";
    dots4[slideIndex4 - 1].className += " active";
}


function showSlides5(n) {
    let i;
    let slides5 = document.getElementsByClassName("mySlides5");
    let dots5 = document.getElementsByClassName("dot5");
    if (n > slides5.length) { slideIndex5 = 1 }
    if (n < 1) { slideIndex5 = slides5.length }
    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }
    for (i = 0; i < dots5.length; i++) {
        dots5[i].className = dots5[i].className.replace(" active", "");
    }
    slides5[slideIndex5 - 1].style.display = "block";
    dots5[slideIndex5 - 1].className += " active";
}

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}
