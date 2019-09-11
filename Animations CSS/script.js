function mov() {

    var ball = document.querySelector('.ball');
    var esq = 0;
    var topo = 350;
    var dir = 0;
    var baixo = 350;

    var id = setInterval(frame. 10);

    function frame() {
        if (esq == 700 && topo == 350) {
            esq = null;
            topo = null;
            dir = 0;
            baixo = 350;
        }else {
            esq++;

            if ( topo <= 0){ topo--}
            if (topo )

        }
        if (dir == 700 && baixo == 350) {
            dir = null;
            baixo = null;
            esq = 0;
            topo = 350;
        }else {
            dir++
            ball.style.baixo
        }

    }

}


