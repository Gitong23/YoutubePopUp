const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLink =document.querySelectorAll(".youtube-link");

YTLink.forEach(link => {
    link.addEventListener("click", () =>{
        YTPlayerOverlay.classList.add("active");
    });
});

YTPlayerOverlay.addEventListener("click", () => {
    YTPlayerOverlay.classList.remove("active");
});