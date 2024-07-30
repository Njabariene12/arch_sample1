const menus = document.getElementsByClassName("menu")[0];
const toggles = document.getElementsByClassName("toggler")[0];

toggles.addEventListener("click", () => {
    menus.classList.toggle("active")
})


