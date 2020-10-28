var form = document.querySelector("form");


function fun_cadastro(){
    var form = document.querySelector("form");
    form.classList.add("form-cadastro");
    form.innerHTML = "<form >\n" +
        "            <div class=\"input-block\">\n" +
        "                <label for=\"login-nome\">Nome</label>\n" +
        "                <input type=\"text\" id=\"login-nome\" />\n" +
        "            </div>\n" +
        "            <div class=\"input-block\">\n" +
        "                <label for=\"login-email\">Email</label>\n" +
        "                <input type=\"email\" id=\"login-email\" />\n" +
        "            </div>\n" +
        "            <div class=\"input-block\">\n" +
        "                <label for=\"login-email\">Telefone</label>\n" +
        "                <input type=\"telefone\" id=\"login-telefone\" />\n" +
        "            </div>\n" +
        "            <div class=\"input-block\">\n" +
        "                <label for=\"login-password\">Senha</label>\n" +
        "                <input type=\"password\" id=\"login-password\" />\n" +
        "            </div>\n" +
        "            <button type=\"submit\" class=\"btn-cad\" onclick='confirm_cad()' >Cadastrar</button>\n" +
        "        </form>";
}

function confirm_cad(){

    alert("tratamento de dados e volta para pagina inical")
}
