const photos = document.querySelectorAll(".photo img");

const popup = document.querySelector(".popup");
const popupPhoto = document.querySelector(".myPhoto");

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const closePopupBtn = document.querySelector(".close-popup");

let currentImg;

const showBigPhoto = (e) => {
  const clickedPhoto = e.target.src;
  popupPhoto.setAttribute("src", clickedPhoto);
  popup.classList.remove("hidden");
  currentImg = Array.from(photos).indexOf(e.target);
};

const closePopup = () => {
  popup.classList.add("hidden");
};

const showNextImage = () => {
  if (currentImg === Array.from(photos).length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  popupPhoto.src = photos[currentImg].src;
};

const showPreviousImage = () => {
  if (currentImg === 0) {
    currentImg = Array.from(photos).length - 1;
  } else {
    currentImg--;
  }
  popupPhoto.src = photos[currentImg].src;
};

photos.forEach((photo, index) => {
  photo.addEventListener("click", showBigPhoto);
});

closePopupBtn.addEventListener("click", closePopup);
arrowRight.addEventListener("click", showNextImage);
arrowLeft.addEventListener("click", showPreviousImage);
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" && e.keyCode === 39) {
    showNextImage();
  } else if (e.code === "ArrowLeft" && e.keyCode === 37) {
    showPreviousImage();
  } else if (e.code === "Escape" && e.keyCode === 27) {
    closePopup();
  }
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
