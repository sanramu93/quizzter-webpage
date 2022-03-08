const userImgs = document.querySelectorAll(".user-img");
const testimonials = document.querySelectorAll(".testimonial-text-p");

userImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    userImgs.forEach((img) => {
      img.classList.remove("user-img--active");
    });
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("testimonial-text-p--active");
    });

    e.target.classList.add("user-img--active");

    const testimonialAtt = img.dataset.testimonial;

    const testimonial = document.querySelector(
      `[data-testimonial='${testimonialAtt}']`
    );
    testimonial.classList.add("testimonial-text-p--active");
  });
});
