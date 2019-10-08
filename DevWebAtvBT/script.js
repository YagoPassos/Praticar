var aux_menu = 0;

if (window.matchMedia("(max-width:991px)").matches) {
    let navLink = document.querySelectorAll('.nav-link');
    let navItem = document.querySelectorAll('.nav-item');

    navLink[0].innerHTML = '<i class="fas fa-eye"></i>';
    navLink[1].innerHTML = '<i class="fas fa-image"></i>';
    navLink[2].innerHTML = '<i class="fas fa-feather-alt"></i>';

    for (i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("mouseenter", function () {
            this.style.backgroundColor = "rgba(50, 33, 78, 0.550)";
        });
        navItem[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "";
        });
    }
}

function op_cl_menu() {
    aux_menu == 0 ? abrir_menu() : fechar_menu();
}

function abrir_menu() {
    let navbarSite = document.querySelector('#navbarSite');
    let navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
    let navbarNav = document.querySelector('.navbar-nav');
    navbarSite.classList.add('show');
    navbarTogglerIcon.classList.remove('fa-bars');
    navbarTogglerIcon.classList.add('fa-times');
    aux_menu = 1;
}

function fechar_menu() {
    let navbarSite = document.querySelector('#navbarSite');
    let navbar_toggler_icon = document.querySelector('.navbar-toggler-icon');
    let navbarNav = document.querySelector('.navbar-nav');
    navbarSite.classList.remove('show');
    navbar_toggler_icon.classList.add('fa-bars');
    navbar_toggler_icon.classList.remove('fa-times');
    aux_menu = 0;
}

var imgs = {

    imagens: document.querySelectorAll('.glryImg'),

    abrir_imagem: function (ig) {
        let popup = document.querySelector('.pop-up-container');
        let ppImg = document.querySelector('.ppImg');

        ppImg.src = ig;
        popup.classList.add('mostrar');
    },

    fechar_imagem: function () {
        let popup = document.querySelector('.pop-up-container');

        popup.classList.remove('mostrar');
    },

}
var img = document.querySelectorAll('.glryImg')
var img_atb = '';

for (i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function () {
        img_atb = this.getAttribute('src');
        imgs.abrir_imagem(img_atb);
    });
}

var bgBn1 = document.querySelector('.bgBn1');
var bgBn2 = document.querySelector('.bgBn2');
var banner1 = document.querySelector('.banner1');
var banner2 = document.querySelector('.banner2');
var imgBanner1 = document.querySelector('.bnr1');
var imgBanner2 = document.querySelector('.bnr2');

if (window.matchMedia("(min-width:1100px").matches) {
    bgBn1.addEventListener("mouseenter", function () {
        bgBn1.style.transition = "500ms";
    });
    bgBn1.addEventListener("mouseout", function () {
        bgBn1.style.transition = "500ms";
        bgBn1.style.filter = "blur(0)";
    });
    bgBn2.addEventListener("mouseenter", function () {
        bgBn2.style.transition = "500ms";
        bgBn1.style.filter = "blur(1.5px)";
    });
    bgBn2.addEventListener("mouseout", function () {
        bgBn2.style.transition = "500ms";
        bgBn2.style.filter = "blur(0)";
    });
    banner1.addEventListener("mouseenter", function () {
        imgBanner1.style.transition = "800ms";
        imgBanner1.style.right = "350px";
        bgBn1.style.filter = "blur(1.5px)";
    });
    banner1.addEventListener("mouseout", function () {
        imgBanner1.style.transition = "800ms";
        imgBanner1.style.right = "50px";
    });
    banner2.addEventListener("mouseenter", function () {
        imgBanner2.style.transition = "800ms";
        imgBanner2.style.left = "350px";
    });
    banner2.addEventListener("mouseout", function () {
        imgBanner2.style.transition = "800ms";
        imgBanner2.style.left = "50px";
    });
    imgBanner1.addEventListener("mouseenter", function () {
        imgBanner1.style.transition = "800ms";
        // imgBanner1.style.right= "350px";
        bgBn1.style.filter = "blur(1.5px)";
    });
    imgBanner1.addEventListener("mouseout", function () {
        imgBanner1.style.transition = "800ms";
        imgBanner1.style.right = "50px";
    });
    imgBanner2.addEventListener("mouseenter", function () {
        imgBanner2.style.transition = "800ms";
        // imgBanner2.style.left= "350px";    
        bgBn2.style.filter = "blur(1.5px)";
    });
    imgBanner2.addEventListener("mouseout", function () {
        imgBanner2.style.transition = "800ms";
        imgBanner2.style.left = "50px";
    });
}

if (window.matchMedia("(max-width:991px)").matches) {
    imgBanner1.style.justifyContent = "center";
}

function initMap() {
    var salvador = { lat: -12.97111, lng: -38.51083 };

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 5, center: salvador });
    var marker = new google.maps.Marker({ position: salvador, map: map });
}