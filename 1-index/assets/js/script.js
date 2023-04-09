function verificaSenha(){
         /*cont login = document.getElementById('email').value;*/
            const senha = parseInt(document.getElementById('senha').value);

            if(senha == "01234567"){
                alert("LOGADO COM SUCESSO");
                location.href="../3-homepage/homepage.html";
            }
            else if(''){
                alert("A SENHA É OBRIGATÓRIA!");
            }
            else{
                alert("SENHA INCORRETA!");
            }
            input.value = "";// limpa a caixa após a digitação
            input.focus(); // A caixa fica destacada ao ser clicada
        }