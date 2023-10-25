function fibonacci(){
    const numValueElement = document.getElementById("input-numero");
    const num = numValueElement.value.trim();
    const numInt = parseInt(num);
    const estadoSolicitud = document.getElementById("estado-solicitud");
    const mensajeError = document.getElementById("texto-solicitud");
    const resultadoElemento = document.getElementById("resultado");
    const regexNumero = /^[\d]{1,3}$/;
    const numeroValido = regexNumero.test(num);

    if(!numeroValido){
        estadoSolicitud.textContent = "Error: ";
        estadoSolicitud.style.color = "red";
        mensajeError.textContent = "No ingresaste un dato válido";
        mensajeError.style.color = "red";
        resultadoElemento.textContent = '';
    }else if (numInt > 100){
        estadoSolicitud.textContent = "Error: ";
        estadoSolicitud.style.color = "red";
        mensajeError.textContent = "El dato supera al número 100";
        mensajeError.style.color = "red";
        resultadoElemento.textContent = '';
    } else {
        let fib = [0, 1];
        let strResultado = "0, 1";
        for(let i = 2; i < numInt; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
            let numeroSiguiente = fib[i].toString();
            strResultado += ', ';
            strResultado += numeroSiguiente;
        }
        estadoSolicitud.textContent = "Exitoso: ";
        estadoSolicitud.style.color = "green";
        mensajeError.textContent = "El dato ingresado fue correcto";
        mensajeError.style.color = "green";
        resultadoElemento.style.color = "green"
        resultadoElemento.textContent = strResultado;
    }
}
