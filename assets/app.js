const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scroll-animaton");
        } else {
            entry.target.classList.remove("scroll-animaton");
        }
    });
});
const animateContent = document.querySelectorAll(".show-scroll-animaton");
animateContent.forEach((el) => observer.observe(el));

