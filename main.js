document.addEventListener("DOMContentLoaded", function() {
    const inputNome = document.getElementById("inputA");
    const inputNumero = document.getElementById("inputB");
    const btnAdicionar = document.getElementById("btnAdd");
    const tabelaContatos = document.querySelector(".tblContato table tbody");

    inputNumero.addEventListener("input", function() {
        let numero = inputNumero.value.replace(/\D/g, ''); 
        if (numero.length > 0) {
            numero = "(" + numero.substring(0, 2) + ") " + numero.substring(2, 3) + " " + numero.substring(3, 7) + "-" + numero.substring(7, 11);
            inputNumero.value = numero;
        }
    });

    btnAdicionar.addEventListener("click", function(event) {
        event.preventDefault(); 

        const nome = inputNome.value.trim();
        let numero = inputNumero.value.trim();
        
        
        numero = numero.replace(/\D/g, '');

        if (nome === "" || numero === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (numero.length !== 11) {
            alert("Por favor, insira um número de telefone válido com 11 dígitos.");
            return;
        }

        const novoContato = `
            <tr>
                <td>${nome}</td>
                <td>${numero}</td>
            </tr>
        `;
        
        tabelaContatos.insertAdjacentHTML("beforeend", novoContato);

        
        inputNome.value = "";
        inputNumero.value = "";

        alert("Contato adicionado com sucesso!");
    });
});
