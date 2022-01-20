// ============= Slide in Navigation ====================
const navButton = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");
// const navAuth = document.querySelector(".auth");

let showMenu = false;
navButton.addEventListener("click", openMenu)
function openMenu() {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navItem.forEach(item =>{
            item.classList.add("show");
        });
       
        showMenu = true;
    }else {
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navItem.forEach(item =>{
            item.classList.remove("show");
        });
        showMenu = false;
    }
}
// Close navigation on click
navItem.forEach(item => {
    item.addEventListener('click', openMenu)
});