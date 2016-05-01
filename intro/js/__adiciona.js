var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener('click', function() {
	event.preventDefault(); // função para desabilitar todos os events padrões de um elemento
	var novoPaciente = {
		'nome': document.querySelector('#campo-nome'),
		'peso': document.querySelector('#campo-peso'),
		'altura': document.querySelector('#campo-altura'),
		'imc': calculaImc
	};

	var pacienteNovo =  "<tr class='paciente'>"+
							"<td class='info-nome'>"+novoPaciente.nome.value+"</td>"+
							"<td class='info-peso' id='peso-2'>"+novoPaciente.peso.value+"</td>"+
							"<td class='info-altura' id='altura-2'>"+novoPaciente.altura.value+"</td>"+
							"<td class='info-imc' id='imc-2'>"+novoPaciente.imc(type='botao')+"</td>"+
						"</tr>";


	var tabela = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	//limpa campos
	novoPaciente.nome.value = '';
	novoPaciente.peso.value = '';
	novoPaciente.altura.value = '';

})