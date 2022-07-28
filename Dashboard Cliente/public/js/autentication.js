let jose = ["76213876823","senhateste123"]

function autentication(){
    if (document.getElementById("cpf").value == "") {
        console.log("seu cpf esta vazio")
    }else{
        document.getElementById("cpf").value;
        const timeOutClose = setTimeout(close, 500);
        document.getElementById("cpf").style.display = "none";
        document.getElementById("senha").style.display = "block";
        const timeoutShow = setTimeout(show, 400);
        if (document.getElementById("senha").value == "") {
            
        }else{
            if (document.getElementById("cpf").value == jose[0] && document.getElementById("senha").value == jose[1]) {
                window.location.href = "http://localhost:3000/painel";
            } else {
                
            }
            console.log(document.getElementById("cpf").value + " " + document.getElementById("senha").value);
        }
    }
}

function show(){
    document.getElementById("senha").style.opacity = 1;
}

function close(){
    document.getElementById("cpf").style.opacity = 0;
}