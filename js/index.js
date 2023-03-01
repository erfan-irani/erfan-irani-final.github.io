const icon = document.querySelector(".headerIcon");
const nav = document.querySelector(".navulAcc");
const submenu = document.querySelector("ol");
const item = document.querySelector(".submenuB");

icon.addEventListener("click", function () {
    nav.classList.toggle("navAcc-height");
});

item.addEventListener("click", function () {
    submenu.classList.toggle("sub-height");
});