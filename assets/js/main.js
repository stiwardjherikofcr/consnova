function seleccion() {
    const cb = 5000000;
    let c = 0;

    if (document.getElementById('proy1').checked) {
        alert("Selecciono Proyecto 1");
        c = cb + (cb * 0.4);
    }

    if (document.getElementById('proy2').checked) {
        alert("Selecciono Proyecto 2");
        c = cb + (cb * 0.15);
    }

    if (document.getElementById('proy3').checked) {
        alert("Selecciono Proyecto 3");
        c = cb + (cb * 0.2);
    }

    if (document.getElementById('proy4').checked) {
        alert("Selecciono Proyecto 4");
        c = cb + (cb * 0.25);
    }

    const opciones = {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2
    };

    const formatter = new Intl.NumberFormat('es-ES', opciones);
    const resultado = formatter.format(c);
    document.getElementById('vp').value = resultado;
}