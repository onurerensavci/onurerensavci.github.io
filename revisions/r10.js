/* R10: grid cards open the existing lightbox */
(() => {
  const grid = document.querySelector(".statics-grid");
  const lb = document.getElementById("lb");
  const img = document.getElementById("lb-img");
  const closeBtn = document.getElementById("lb-close");
  if (!grid || !lb || !img) return;
  grid.querySelectorAll(".card").forEach(c => { c.tabIndex = 0; c.setAttribute("role", "button"); });
  function open(src, alt){
    img.src = src;
    img.alt = alt || "";
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-on");
    if (window.__staticsClearTouch) window.__staticsClearTouch();
    else if (window.__staticsSyncRate) window.__staticsSyncRate();
    if (closeBtn) closeBtn.focus({preventScroll:true});
  }
  grid.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card || !grid.contains(card)) return;
    const pic = card.querySelector("img");
    if (!pic || !pic.src) return;
    e.preventDefault();
    open(pic.currentSrc || pic.src, pic.alt);
  });
  grid.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (!card) return;
    e.preventDefault();
    const pic = card.querySelector("img");
    if (pic) open(pic.currentSrc || pic.src, pic.alt);
  });
})();
