/* F6: reveal each statics thumb only after it is fully decoded */
(() => {
  document.querySelectorAll(".statics-mq .card img").forEach(img => {
    const show = () => img.classList.add("is-ready");
    const ready = () => (img.decode ? img.decode().catch(() => {}) : Promise.resolve()).then(show);
    if (img.complete && img.naturalWidth) ready();
    else { img.addEventListener("load", ready, { once: true }); img.addEventListener("error", show, { once: true }); }
  });
})();
