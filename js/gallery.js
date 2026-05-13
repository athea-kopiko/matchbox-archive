let touchStartX = 0;
let touchEndX = 0;

const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll(".nav a.pill");

if (gallery && navLinks.length >= 2) {
  const prevLink = navLinks[0].href;
  const nextLink = navLinks[1].href;

  gallery.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  gallery.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;

    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      window.location.href = nextLink;
    }

    if (swipeDistance < -50) {
      window.location.href = prevLink;
    }
  });
}
