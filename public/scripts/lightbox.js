console.log('lightbox');
const thumbnails = [...document.querySelectorAll(".thumbnail")];
  const lightBox = document.querySelector(".lightbox");
  const lightBoxImg = document.querySelector("#lightbox-img");
  const lightBoxClose = document.querySelector("#lightbox-close-btn");

  thumbnails.map((thumbnail) => {
    thumbnail.addEventListener("click", function (e) {
      const imageUrl = thumbnail.dataset.src;
      lightBoxImg.src = imageUrl;
      lightBox.classList.remove("none");
      lightBox.classList.add("active");
    });
  });
  lightBoxClose.addEventListener("click", function (e) {
    lightBox.classList.remove("active");
    lightBox.classList.add("none");
  });
  lightBox.addEventListener("click", function (e) {
    if (e.target === lightBox) {
      // Vérifie que le clic est en dehors de l'image
      lightBox.classList.remove("active"); // Cache la lightbox
      lightBox.classList.add("none");
    }
  });