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

var banner1 = document.querySelector('.banner1');
var banner2 = document.querySelector('.banner2');

banner1.addEventListener("mouseenter", function () {
    banner1.style.zIndex = "2000";
    banner1.style.left = "110px";
    banner1.style.width = "800px";
    banner1.style.transition = "1000ms";
});
banner1.addEventListener("mouseout", function () {
    banner1.style.zIndex = "0";
    banner1.style.left = "30px";
    banner1.style.width = "700px";
    banner1.style.transition = "1000ms";
});

banner2.addEventListener("mouseenter", function () {
    banner2.style.zIndex = "2000";
    banner2.style.right = "150px";
    banner2.style.bottom = "200px";
    banner2.style.width = "430px";
    banner2.style.transition = "1000ms";
});
banner2.addEventListener("mouseout", function () {
    banner2.style.zIndex = "0";
    banner2.style.right = "30px";
    banner2.style.bottom = "200px";
    banner2.style.width = "350px";
    banner2.style.transition = "1000ms";
});

function initMap() {
    var salvador = { lat: -12.97111, lng: -38.51083 };

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 6, center: salvador });
    var marker = new google.maps.Marker({ position: salvador, map: map });
}