document.querySelectorAll(".navbar-item").forEach(tab => {
    tab.addEventListener("click", event => {
        const selectedTab = event.currentTarget;
        document.querySelector(".navbar-item.active")?.classList.remove("active");
        selectedTab.classList.add("active");

        document.querySelector(".navbar-content.show")?.classList.remove("show");
        const selector = selectedTab.getAttribute("href");
        document.querySelector(selector)?.classList.add("show");
    });
});



const div = document.querySelector(".who-am-i")
const icons = document.querySelector(".who-am-i svg");
const paragraph = document.querySelector(".who-am-i p");

console.log(icons, paragraph);

div.addEventListener("mouseenter", event => {
    icons.style.display = "none";
    paragraph.style.display = "flex"
});

div.addEventListener("mouseleave", event => {
    icons.style.display = "flex";
    paragraph.style.display = "none"

});


