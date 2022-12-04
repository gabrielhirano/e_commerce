var isValidate = localStorage.getItem("administradorLogado");

console.log("TEste")

if(isValidate == "false" || isValidate == undefined){
    window.location.href="login.html";
}

setTimeout(sair, 86400000);

function sair(){
    localStorage.setItem("logado", "false")
    window.location.href="login.html";
}
