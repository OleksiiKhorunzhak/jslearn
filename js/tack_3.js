
let slides = document.querySelectorAll('.slide');
let firstSlide = slides[0];
let totalSlides = slides.length;
let lustSlide = slides[totalSlides - 1];
let i;

let dotsContainer = document.querySelector('.slider_dots');

for (x = 0; x < totalSlides; x++) {
    slides[x].setAttribute("data-pos", x + 1);

    let dotElement = document.createElement('span');
    dotElement.className = "slider_dot";
    dotElement.setAttribute("data-pos", x + 1);

    dotsContainer.appendChild(dotElement);

}

let dots = document.querySelectorAll('.slider_dot');
let firstDot = dots[0];

firstDot.classList.add('active');
firstSlide.classList.add('active', 'first_slide');
lustSlide.classList.add('lust_slide');


for (let i = 0; i < dots.length; i++) {


    dots[i].addEventListener('click', function () {
        let activeDot = document.querySelector(".slider_dot.active");
        let activeSlide = document.querySelector('.slide.active');
        let currentPos = activeDot.getAttribute('data-pos');
        let dotClick = this.getAttribute('data-pos');
        let nextSlide = document.querySelector(".slide[data-pos='" + dotClick + "'");

        if (currentPos !== dotClick) {
            activeDot.classList.remove('active');
            activeSlide.classList.remove('active');
            this.classList.add('active');
            nextSlide.classList.add('active');
        }

    });


}

let arrowNav = document.querySelectorAll('.control_arrow');

for (let i = 0; i < arrowNav.length; i++) {
    arrowNav[i].addEventListener('click', function () {
        let activeDot = document.querySelector(".slider_dot.active");
        let currentDotPos = activeDot.getAttribute('data-pos');
        let activeSlide = document.querySelector('.slide.active');
        let currentSlidePos = activeSlide.getAttribute('data-pos');
        let prevSlidePos = slides[currentSlidePos - 2];
        let nextSlidePos = slides[currentSlidePos];
        let prevDotPos = dots[currentDotPos - 2];
        let nextDotPos = dots[currentDotPos];
        let arrowPrew = document.querySelector('.prev_arrow');
        let firstSlidePos = firstSlide.getAttribute('data-pos');
        let lustSlidePos = lustSlide.getAttribute('data-pos');

        activeDot.classList.remove('active');
        activeSlide.classList.remove('active');


        if (arrowPrew === this) {
            if (firstSlidePos === currentSlidePos) {
                prevSlidePos = slides[totalSlides - 1];
                prevDotPos = dots[totalSlides - 1];
            }
            prevSlidePos.classList.add("active");
            prevDotPos.classList.add("active");

        } else {
            if (lustSlidePos === currentSlidePos) {
                nextSlidePos = slides[0];
                nextDotPos = dots[0];
            }
            nextSlidePos.classList.add("active");
            nextDotPos.classList.add("active");
        }
    });
}



