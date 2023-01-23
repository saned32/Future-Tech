(function() {

    init(); //on page load - show first slide, hidethe rest
    
    function init() {
    
    parents = document.getElementsByClassName('slideshow-container1');
    
    for (j = 0; j < parents.length; j++) {
    var slides = parents[j].getElementsByClassName("mySlides1");
    var dots = parents[j].getElementsByClassName("dot1");
    slides[0].classList.add('active-slide');
    dots[0].classList.add('active');
    }
    }
    
    dots = document.getElementsByClassName('dot1'); //dots functionality
    
    for (i = 0; i < dots.length; i++) {
    
    dots[i].onclick = function() {
    
    slides = this.parentNode.parentNode.getElementsByClassName("mySlides1");
    
    for (j = 0; j < this.parentNode.children.length; j++) {
    this.parentNode.children[j].classList.remove('active');
    slides[j].classList.remove('active-slide');
    if (this.parentNode.children[j] == this) {
    index = j;
    }
    }
    this.classList.add('active');
    slides[index].classList.add('active-slide');
    }
    }
    //prev/next functionality
    links = document.querySelectorAll('.slideshow-container1 a');
    
    for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
    current = this.parentNode;
    
    var slides = current.getElementsByClassName("mySlides1");
    var dots = current.getElementsByClassName("dot1");
    curr_slide = current.getElementsByClassName('active-slide')[0];
    curr_dot = current.getElementsByClassName('active')[0];
    curr_slide.classList.remove('active-slide');
    curr_dot.classList.remove('active');
    if (this.className == 'next1') {
    
    if (curr_slide.nextElementSibling.classList.contains('mySlides1')) {
    curr_slide.nextElementSibling.classList.add('active-slide');
    curr_dot.nextElementSibling.classList.add('active');
    } else {
    slides[0].classList.add('active-slide');
    dots[0].classList.add('active');
    }
    
    }
    
    if (this.className == 'prev1') {
    
    if (curr_slide.previousElementSibling) {
    curr_slide.previousElementSibling.classList.add('active-slide');
    curr_dot.previousElementSibling.classList.add('active');
    } else {
    slides[slides.length - 1].classList.add('active-slide');
    dots[slides.length - 1].classList.add('active');
    }
    
    }
    
    }
    
    }
    })();