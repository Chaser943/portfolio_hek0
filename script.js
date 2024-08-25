const tabs = document.querySelectorAll(".navbar-item")

tabs.forEach(tab=>{
    tab.addEventListener("click", event=>{
        const selectedTab = event.currentTarget;
        document.querySelector(".navbar-item.active")?.classList.remove("active");
        selectedTab.classList.add("active");

        document.querySelector(".navbar-content.show")?.classList.remove("show");

        const selector = selectedTab.dataset.content;
        if (selector){
            document.querySelector(selector)?.classList.add("show");
    }
})
})

document.addEventListener("DOMContentLoaded", function () {
    const whoAmIGrosElements = document.querySelectorAll('.who-am-i_gros');

    whoAmIGrosElements.forEach(element => {
        element.dataset.originalContent = element.innerHTML;

        element.addEventListener('mouseenter', () => {
            const newContent = element.getAttribute('data-hover-content');

            element.innerHTML = newContent;

            element.classList.add('transformed');
        });

        element.addEventListener('mouseleave', () => {
           element.innerHTML = element.dataset.originalContent;

            element.classList.remove('transformed');
        });
    });
});