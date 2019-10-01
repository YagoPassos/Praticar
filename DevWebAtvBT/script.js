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
var imgBanner1 = document.querySelector('.imgBanner1');
var imgBanner2 = document.querySelector('.imgBanner2');

bgBn1.addEventListener("mouseenter", function () {

    bgBn1.style.transition = "500ms";
    bgBn1.style.filter= "blur(2px)";
    imgBanner1.style.right= "120px";
    
});
bgBn1.addEventListener("mouseout", function () {
    bgBn1.style.transition = "500ms";
    bgBn1.style.filter= "blur(0)";
    imgBanner1.style.right= "50px";
});
bgBn2.addEventListener("mouseenter", function () {

    bgBn2.style.transition = "500ms";
    bgBn2.style.filter= "blur(2px)";
    imgBanner2.style.right= "120px";
    
    
});
bgBn2.addEventListener("mouseout", function () {
    bgBn2.style.transition = "500ms";
    bgBn2.style.filter= "blur(0)";
    imgBanner2.style.right= "50px";
});


function initMap() {
    var salvador = { lat: -12.97111, lng: -38.51083 };

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 5, center: salvador });
    var marker = new google.maps.Marker({ position: salvador, map: map });
}