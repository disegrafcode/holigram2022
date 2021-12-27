var swiper1 = new Swiper("#sliderNosotros", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function nextSliderNosotros()
{
    swiper1.slideNext();
}

var swiper = new Swiper("#mainSlider", {
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
});

function showVideo() {
    let videoIframe = document.getElementById("videoIframe");
    let urlVideo = "https://player.vimeo.com/video/191562048?autoplay=1";
    videoIframe.innerHTML = `<iframe src="${urlVideo}" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>`;
}

function deleteVideo() {
    let videoIframe = document.getElementById("videoIframe");
    videoIframe.innerHTML = '';
}

let videoModal = document.getElementById('videoModal')
videoModal.addEventListener('show.bs.modal', function (event) {
    showVideo();
})
videoModal.addEventListener('hidden.bs.modal', function (event) {
    deleteVideo()
})