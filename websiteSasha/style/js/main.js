let status = 0;
let header = document.getElementById('header');
let mainNav = document.getElementById("main-nav");
let drop = document.getElementById('dropdown');
window.addEventListener('scroll', function() {
    if (pageYOffset > 300) {
        header.classList.add('header_fixed');
        header.style.display = "block";
        document.getElementsByTagName("main")[0].style.margin = "50px 0 0 0";
    } else if (status === 0) {
        header.classList.remove('header_fixed');
        document.getElementsByTagName("main")[0].style.margin = "0";
    }
});

var chckbx = document.getElementById('check_header');
chckbx.onchange = function(event) {
    if (window.matchMedia('(max-width: 1040px)').matches) {
        if (chckbx.checked) {
            mainNav.style.display = "flex";
            document.body.style.overflow = "hidden";
        } else {
            mainNav.style.display = "none";
            document.body.style.overflow = "auto";

        }
    }
}
let desktopNav = document.getElementById("nav_section_desktop");
let desktopNavControl = document.getElementsByClassName("menu_paraghraph name")[0];
desktopNavControl.parentNode.onmouseenter = function() {
    if (window.matchMedia('(min-width: 1040px)').matches){
        desktopNav.style.display = "flex";
        desktopNavControl.dataset.type = "hover";
    }
}
desktopNavControl.parentNode.onmouseleave = function (event) {
    if (window.matchMedia('(min-width: 1040px)').matches){
        if (event.relatedTarget != desktopNav) {
            desktopNav.style.display = "none";
            desktopNavControl.dataset.type = "";
        }
        
    }
}
desktopNav.onmouseleave = function (event) {
    if (window.matchMedia('(min-width: 1040px)').matches){
        if (event.relatedTarget != desktopNavControl) {
            desktopNav.style.display = "none";
            desktopNavControl.dataset.type = "";
        }
        
    }
}
// .onmouseenter = function(event) {
//     if (header.classList.contains('header_fixed') == false) {
//         header.classList.add('header_fixed');
//         status = 1;
//         document.getElementsByTagName("main")[0].style.margin = "50px 0 0 0";
//     }
// };
// navSection.onmouseleave = function(event) {
//     status = 0;
// };