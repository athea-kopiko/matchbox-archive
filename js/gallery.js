let touchStartX = 0;
let touchEndX = 0;

const gallery = document.querySelector(".gallery");

if (gallery) {

  gallery.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  gallery.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {

    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      nextImage();
    }

    if (swipeDistance < -50) {
      prevImage();
    }
  }
}
