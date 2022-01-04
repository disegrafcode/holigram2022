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

let currentActiveItem;
function showItemTeamNosotros(obj)
{
    if(obj.classList.contains("listTeamNosotrosActive"))
    {
        hideItemTeamNosotros(obj);        
    }
    else
    {
        clearItemTeamNosotros();
        obj.classList.add("listTeamNosotrosActive");
        currentActiveItem = obj;
    }
}

function hideItemTeamNosotros(obj)
{
    obj.classList.remove("listTeamNosotrosActive");
    obj.classList.add("listTeamNosotrosExit");
    /* END ANIMATION */
    obj.addEventListener("webkitAnimationEnd", function(){
        obj.classList.remove("listTeamNosotrosExit");
    });
    obj.addEventListener("animationend", function(){
        obj.classList.remove("listTeamNosotrosExit");
    });
    /* END ANIMATION */
}

function clearItemTeamNosotros()
{
    let parent = document.getElementById("listTeamNosotros");
    let items = parent.querySelectorAll("li");
    for(let i=0; i<items.length;i++)
    {
        items[i].classList.remove("listTeamNosotrosExit");
        items[i].classList.remove("listTeamNosotrosActive");
    }
}

/* MINI NAVBAR */
window.onscroll = function () { navStickyForServices() };
let sectionStart = document.getElementById("hero");
let offsetBottomMiniNav = sectionStart.offsetTop + sectionStart.offsetHeight;
let customMiniNav = document.getElementById("miniNavBarNosotros");

function navStickyForServices() {
    if(customMiniNav==undefined)
    {
        return;
    }
    if (window.pageYOffset >= offsetBottomMiniNav) {
        customMiniNav.classList.add("animate__animated");
        customMiniNav.classList.add("animate__slideInDown");
        customMiniNav.classList.add("miniNavBarActive");
    }
    else {
        customMiniNav.classList.remove("miniNavBarActive");
        customMiniNav.classList.remove("animate__animated");
        customMiniNav.classList.remove("animate__slideInDown");
      
    }
}
/* MINI NAVBAR */
