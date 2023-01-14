const img1 = document.getElementById("small-1");
const img2 = document.getElementById("small-2");

const thumbnails = [img1, img2];
const focusImages = ["/img/main/main-left-small-1.jpg", "/img/main/main-left-small-2.jpg"];

const focusImg = document.getElementById("big");

const activateGallery = () => {
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("mouseover", function () {
      focusImg.style.background = `url('${focusImages[i]}') no-repeat center center/contain`;
    });
  });
  
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", function () {
      focusImg.style.background = `url('${focusImages[i]}') no-repeat center center/contain`;
    });
  });

  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("mouseleave", function () {
      focusImg.style.background = `url('${focusImages[i]}') no-repeat center center/contain`;
    });
  });
};

const init = () => {
  activateGallery();
};

init();
