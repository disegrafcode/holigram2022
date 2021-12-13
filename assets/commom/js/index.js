function startSlider1() {
    let parent = document.getElementById("swipeSlider1");
    let slides = parent.querySelectorAll(".swiper-slide");
    if (window.innerWidth < 768) {
        slides[0].classList.add("itemGallery16Active");
    }
    else {
        slides[1].classList.add("itemGallery16Active");
    }

}
startSlider1();

let swiperPrincipal = new Swiper("#swipeSlider1", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    translate: 800,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        624: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        250: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

swiperPrincipal.on('slideChange', function () {

    console.log(window.innerWidth);
    var numSlide = swiperPrincipal.activeIndex + 1;
    if (window.innerWidth < 768) {
        numSlide = swiperPrincipal.activeIndex;
    }

    const currentSlide = swiperPrincipal.slides[numSlide];
    clearAllSliders();
    currentSlide.classList.add("itemGallery16Active");
});


// init Swiper
swiperPrincipal.init();

function clearAllSliders() {
    for (let i = 0; i < swiperPrincipal.slides.length; i++) {
        swiperPrincipal.slides[i].classList.remove("itemGallery16Active");
    }
}

function closeMenuH14() {
    console.log(document.getElementById("toggleH14"));
    //document.getElementById("toggleH14").click();
}

let swiperAuspiciador1 = new Swiper("#swiperAuspiciadores1", {
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        250: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
let swiperAuspiciador2 = new Swiper("#swiperAuspiciadores2", {
    slidesPerView: 6,
    spaceBetween: 30,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        250: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});