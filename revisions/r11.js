/* R11: use 500px WebP thumbs in the grid, marquee and hero collage; lightbox loads the original. */
(() => {
  const THUMB_RE = /assets\/([^/]+)\.(jpe?g|png)$/i;
  function thumbPath(src){
    const m = (src || "").match(THUMB_RE);
    return m ? ("assets/thumbs/" + m[1] + ".webp") : null;
  }
  document.querySelectorAll(".statics-grid img, .statics-mq img, .hero-collage img").forEach(img => {
    const orig = img.getAttribute("src") || "";
    const thumb = thumbPath(orig);
    if (!thumb) return;
    img.dataset.full = orig;
    img.src = thumb;
  });
  const lbImg = document.getElementById("lb-img");
  if (!lbImg) return;
  function originalFromThumb(src){
    const m = (src || "").match(/assets\/thumbs\/([^/?#]+)\.webp/i);
    return m ? ("assets/" + m[1] + ".jpg") : null;
  }
  const applyFull = () => {
    const lb = document.getElementById("lb");
    if (!lb || !lb.classList.contains("open")) return;
    const cur = lbImg.getAttribute("src") || "";
    const orig = originalFromThumb(cur);
    if (orig) lbImg.src = orig;
  };
  new MutationObserver(applyFull).observe(lbImg, { attributes: true, attributeFilter: ["src"] });
})();
