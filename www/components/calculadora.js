window.onload = function(){
    const v1 = document.getElementById("v1")
    const v2 = document.getElementById("v2")
    const somar = document.getElementById("somar")
    const subtrair = document.getElementById("subtrair")
    const multiplicar = document.getElementById("multiplicar")
    const dividir = document.getElementById("dividir")

    somar.addEventListener("click", function(){
        let resultado = parseFloat(v1.value) + parseFloat(v2.value);
        document.getElementById("result").value = resultado;
    });

    subtrair.addEventListener("click", function(){
        let resultado = parseFloat(v1.value) - parseFloat(v2.value);
        document.getElementById("result").value = resultado;
    });

    multiplicar.addEventListener("click", function(){
        let resultado = parseFloat(v1.value) * parseFloat(v2.value);
        document.getElementById("result").value = resultado;
    });

    dividir.addEventListener("click", function(){
        let resultado = parseFloat(v1.value) / parseFloat(v2.value);
        document.getElementById("result").value = resultado;
    }); 
}