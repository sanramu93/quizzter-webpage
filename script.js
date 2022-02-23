const userImgs = document.querySelectorAll(".user-img");

userImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    userImgs.forEach((img) => {
      img.classList.remove("user-img--active");
    });

    e.target.classList.add("user-img--active");
  });
});
