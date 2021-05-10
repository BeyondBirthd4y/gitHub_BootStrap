function pesquisar(event){
    var tecla = event.keyCode;
    let img = document.getElementById("thumb");
    let search = document.getElementById("search");
    var spam = document.getElementById("textospam")
    let texto = String(search.value);
    let pesquisa = texto.toLowerCase()
    let titulo = document.getElementById("titulo");
    let desc = document.getElementById("descricao");
    if (tecla === 13){
        switch (pesquisa) {
            case "node":
                img.src = "nodejs.png"
                titulo.innerHTML = "Node.js";
                desc.innerHTML = "Node.js is a tool for executing JavaScript in a variety of environments."
                spam.innerHTML = "1";
                break;
            case "java":
                img.src = "java.png"
                titulo.innerHTML = "Java"
                desc.innerHTML = "Java is an object-oriented programming language used mainly for web, desktop, embedded devices and mobile applications."
                spam.innerHTML = "2";
                break;
            case "python":
                img.src = "python.jpg"
                titulo.innerHTML = "Python";
                desc.innerHTML = "Python is a dynamically typed programming language."
                spam.innerHTML = "3";
                break;
            default:
                break;
        }
    }
}