// TESTIMONIALS

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

// PRODUCT OVERVIEW

const headerTabs = document.querySelectorAll(".slider-header-tab");
const overviewImages = document.querySelectorAll(".product-overview-img");
const overviewContent = document.querySelectorAll(".slider-content-left");

headerTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    headerTabs.forEach((tab) => {
      tab.classList.remove("slider-header-tab--active");
    });

    overviewImages.forEach((tab) => {
      tab.classList.remove("product-overview-img--active");
    });

    overviewContent.forEach((tab) => {
      tab.classList.remove("slider-content-left--active");
    });

    const tab = e.target.closest(".slider-header-tab");
    const slideNum = tab.getAttribute("data-slide-num");

    headerTabs[slideNum].classList.add("slider-header-tab--active");
    overviewImages[slideNum].classList.add("product-overview-img--active");
    overviewContent[slideNum].classList.add("slider-content-left--active");
  });
});
