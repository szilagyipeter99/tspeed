const observer = new IntersectionObserver((e) => {
  e.forEach((e) => {
    e.isIntersecting && e.target.classList.add("show");
  });
});
hiddenElements = document.querySelectorAll(".anim1, .anim2");
hiddenElements.forEach((e) => observer.observe(e));
