// Name: Carol Freitas
// Date: 29/07/2020
// Update: 31/07/2020
// Description: lógica para validar os campos, para que eles não venham vazios


function validar() {
    var nome = formulario.nome.value;
    var idade = formulario.idade.value;
    var estado = formulario.estado.value;

    if (nome == "") {
        // console.log('linha 13')
        document.getElementById("erronome").style.display = 'block';
    } else {
        document.getElementById("erronome").style.display = 'none';
    }

    if (idade == "") {
        document.getElementById("erroidade").style.display = 'block';
    } else {
        document.getElementById("erroidade").style.display = 'none';
    }

    if (estado == "") {
        document.getElementById("erroestado").style.display = 'block';
    } else {
        document.getElementById("erroestado").style.display = 'none';
    }

}