function validaSenha(){
            const senha1 = parseInt(document.getElementById('senha').value);
            const senha2 = parseInt(document.getElementById('confirma').value);

            if(senha1 === senha2  ) { // Verifica os dados das constantes são os mesmos
                alert("SENHA REDEFINIDA!");
                location.href= "../1-index/index.html";
            }else{
                if(senha1 === null || senha2 === null ||senha1 === '' || senha2 === ''){
                    alert("O PREENCHIMENTO É OBRIGATÓRIO!");
                }else{
                    alert("AS SENHAS NÃO CONFEREM,TENTE NOVAMENTE!");
                }
            }
            input.value = "";// limpa a caixa após a digitação
            input.focus(); 
            }