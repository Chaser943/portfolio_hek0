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


const infos = document.querySelectorAll(".who-am-i")
document.createElement("h2",)

infos.forEach(info =>{
    info.addEventListener("click", event =>{
        info.classList.remove(".who-am-i")
        info.classList.add(".who-am-i_gros")

    })
})