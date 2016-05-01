
function calculaImc(type = 'tabela'){
	if (type == 'botao'){
		var imc = this.peso.value / (this.altura.value * this.altura.value);
		console.log(imc)
		return imc;
	}else {
		var imc = this.peso.textContent / (this.altura.textContent * this.altura.textContent);
		console.log(imc)
		return imc;
	}


}

function montaPaciente(pacienteTr){
	var tdNome 		= pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso 		= pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura 	= pacienteTr.getElementsByClassName("info-altura")[0];

	var paciente = {
		"nome": tdNome.textContent,
		"peso": tdPeso,
		"altura": tdAltura,
		"pegaImc": calculaImc
	}

	return paciente;
}

var calculaTodosImcs = function(){

	var trpacientes = document.getElementsByClassName("paciente");

	for (i = 0; i<= trpacientes.length -1; i++){

		var pacienteTr 	= trpacientes[i];
		var pacienteAtual = montaPaciente(pacienteTr); // chama a função que montam os pacientes
		var imc = pacienteAtual.pegaImc() // chamando a função que calcula IMC

		var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];

		tdimc.textContent = imc;

	}

}

var botao = document.getElementById('calcula-imcs');
botao.addEventListener('click', calculaTodosImcs);
botao.addEventListener('click', function() { console.log('segundo execucao de uma funcao no evento on click')})
