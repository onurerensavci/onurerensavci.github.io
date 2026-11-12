/* R2: showreel cover → inject YouTube iframe with autoplay on click. Poster URL is the frame's data-poster only. */
(() => {
  const frame = document.querySelector("#showreel .frame");
  if (!frame) return;
  const poster = frame.getAttribute("data-poster");
  const cover = frame.querySelector(".reel-cover");
  const btn = frame.querySelector(".reel-play");
  const ifr = document.getElementById("reelfr");
  if (!poster || !cover || !btn || !ifr) return;
  cover.src = poster;
  const VIDEO_ID = "zPc8RC-bSX4";
  function play(){
    if (frame.classList.contains("is-playing")) return;
    const src = "https://www.youtube-nocookie.com/embed/" + VIDEO_ID + "?rel=0&enablejsapi=1&vq=hd1080&hd=1&autoplay=1";
    ifr.src = src;
    frame.classList.add("is-playing");
    btn.setAttribute("hidden", "");
  }
  btn.addEventListener("click", play);
})();
