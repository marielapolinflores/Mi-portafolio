function crearTextoCircular(id, texto, radio){

    const contenedor = document.getElementById(id);

    const letras = texto.split("");

    letras.forEach((letra, i)=>{

        const span = document.createElement("span");

        span.innerText = letra;

        const angulo = (360 / letras.length) * i;

        span.style.transform =
        `
        rotate(${angulo}deg)
        translate(${radio}px)
        rotate(90deg)
        `;

        contenedor.appendChild(span);

    });

}



crearTextoCircular(
"texto1",
" ♥ TE AMO MAMÁ ♥ JUNTAS POR SIEMPRE♥ ",
330
);

crearTextoCircular(
"texto2",
" ♥ ERES MI GUÍA ♥ GRACIAS POR TODO ♥ ",
450
);

crearTextoCircular(
"texto3",
" ♥ FELIZ DÍA MAMÁ ♥ TE QUIERO MUCHO ♥ ",
580
);

crearTextoCircular(
"texto4",
" ♥ SIEMPRE A TU LADO ♥ ERES LA MEJOR ♥ ",
700
);
