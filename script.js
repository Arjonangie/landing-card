/* =====================================================
   LANDING CARD · ÁNGELES ARJONA
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       Animación de entrada
    ------------------------------ */

    const elementos = document.querySelectorAll(
        ".logo,h1,h2,.colegio,.intro,h3,.bienvenida,.boton-principal,.item,footer"
    );

    elementos.forEach((el, i) => {

        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";

        setTimeout(() => {

            el.style.transition = "all .7s ease";

            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";

        }, 120 * i);

    });

});


/* --------------------------------
   Botón principal
-------------------------------- */

const boton = document.querySelector(".boton-principal");

if(boton){

    boton.addEventListener("mouseenter",()=>{

        boton.style.transform="translateY(-3px)";

    });

    boton.addEventListener("mouseleave",()=>{

        boton.style.transform="translateY(0px)";

    });

}


/* --------------------------------
   Tarjetas contacto
-------------------------------- */

const tarjetas=document.querySelectorAll(".item");

tarjetas.forEach(tarjeta=>{

    tarjeta.addEventListener("mouseenter",()=>{

        tarjeta.style.transform="translateY(-6px)";

    });

    tarjeta.addEventListener("mouseleave",()=>{

        tarjeta.style.transform="translateY(0px)";

    });

});
