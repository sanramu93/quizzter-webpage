const userImgs = document.querySelectorAll(".user-img");
const userInfos = document.querySelectorAll(".user-info");
const testimonials = document.querySelectorAll(".testimonial-text-p");

userImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    userImgs.forEach((img) => {
      img.classList.remove("user-img--active");
    });
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("testimonial-text-p--active");
    });
    userInfos.forEach((info) => {
      info.classList.remove("user-info--active");
    });

    e.target.classList.add("user-img--active");

    const userAtt = img.dataset.user;

    const testimonial = document.querySelector(
      `[data-testimonial='${userAtt}']`
    );
    const userInfo = document.querySelector(`[data-user-info=${userAtt}]`);

    testimonial.classList.add("testimonial-text-p--active");
    userInfo.classList.add("user-info--active");
  });
});
