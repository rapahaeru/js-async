define(
    ["jquery", "testeModulo", "adicionaPaciente","calculaImc"],
    function ( $, testeModulo, adicionaPaciente,calculaImc ) {
        $(function () {
            //adicionaPaciente();

			var botao = document.getElementById('calcula-imcs');
			botao.addEventListener('click', calculaImc.calculaTodosImcs);
			botao.addEventListener('click', function() { console.log('segundo execucao de uma funcao no evento on click')})

        });
    }
);