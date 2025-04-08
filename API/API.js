function ConsultarCEP(){
    const cep = document.getElementById("cep").value;

    if(!cep){
        alert("Favor inserir cep");
        return;
    }

    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //o código vem em # (por causa do Python) e o json decodifica para imprimir na tela, 
    //sem ele, fica impossível compreender
    .then(response => response.json())
    .then(data => {
        //Error é (supostamente)uma classe original do API, ela pode não existir, 
        //então por isso não roda o IF statement
        if (data.erro) {
            throw new Error("CEP inválido");
        }
        //Data - literalmente o original, as variáveis data não podem ser mudadas, 
        //devem permanecer iguais ao original, diferentemente dos ID da nossa própria programação
        document.getElementById("algo_diferente").textContent = data.logradouro;
        document.getElementById("bairro").textContent = data.bairro;
        document.getElementById("cidade").textContent = data.localidade;
        document.getElementById("estado").textContent = data.uf;
        document.getElementById("error").textContent = "";
    })

        .catch(error => {
            document.getElementById("error").textContent = "Erro: " + error.message;
            document.getElementById("algo_diferente").textContent = "";
            document.getElementById("bairro").textContent = "";
            document.getElementById("cidade").textContent = "";
            document.getElementById("estado").textContent = "";
        });
}