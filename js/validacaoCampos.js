// Name: Carol Freitas
// Date: 29/07/2020
// Description: lógica para validar os campos, para que eles não venham vazios


function validar() {
    var nome = formulario.nome.value;
    var idade = formulario.idade.value;
    var estado = formulario.estado.value;
    var cidade = formulario.cidade.value;

    if (nome == "") {
        console.log('linha 9')
        alert('Por favor, preencha o campo nome :)');
        formulario.nome.focus();
        return false;
    }

    if (idade == "") {
        alert('Por favor, preencha o campo idade :)');
        formulario.idade.focus();
        return false;
    }

    if (estado == "") {
        alert('Por favor, preencha o campo estado :)');
        formulario.estadi.focus();
        return false;
    }

    if (cidade == "") {
        alert('Por favor, preencha o campo cidade :)');
        formulario.cidade.focus();
        return false;
    }
}