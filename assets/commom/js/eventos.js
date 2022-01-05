var swiper = new Swiper("#sliderNosotros", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper("#slider2", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: {
            centeredSlides: true,
        },            
        992: {
            centeredSlides: true,
        },
        0: {
            centeredSlides: false,
        },
    },
});


swiper2.on('slideChange', function () {
    clearAllSlidersSwiper2();
    showActiveSliderSwiper2();
});

function nextSlider2()
{
    swiper2.slideNext();
}

function clearAllSlidersSwiper2() {
    for (let i = 0; i < swiper2.slides.length; i++) {
        swiper2.slides[i].classList.remove("swiper2Active");
    }
}

function showActiveSliderSwiper2()
{
    let numSlide = swiper2.activeIndex;
    let currentSlide = swiper2.slides[numSlide];
    currentSlide.classList.add("swiper2Active");
}
showActiveSliderSwiper2();