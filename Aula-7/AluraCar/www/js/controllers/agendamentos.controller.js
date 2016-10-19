angular.module('starter')
.controller('AgendamentosController', function($scope, DatabaseValues, CarroService, $ionicPopup, $state){

	$scope.agendamentos = [];

	DatabaseValues.setup();
	DatabaseValues.bancoDeDados.transaction(function(transacao){
		transacao.executeSql('SELECT * FROM agendamentos', [], function(transacao, resultados){

			for(var i = 0; i < resultados.rows.length; i++){
				$scope.agendamentos.push(resultados.rows[i]);

			}

		})
	})

	$scope.reenviar = function(agendamento){

		var agendamentoFinalizado = {
			params : {
				nome : agendamento.nome,
				endereco : agendamento.endereco,
				email : agendamento.email,
				carro : agendamento.modelo,
				preco : agendamento.preco

			}
		}

		CarroService.salvarPedido(agendamentoFinalizado).then(function(dados){

			DatabaseValues.setup();
			DatabaseValues.bancoDeDados.transaction(function(transacao){
				transacao.executeSql("UPDATE agendamentos SET confirmado = 'true' WHERE id = ? ", [agendamento.id])
			})

			$ionicPopup.alert({
				title : 'Parabens',
				template : 'Seu agendamento foi confirmado com sucesso'
			}).then(function(){
				$state.go($state.current, {}, {reload: true})

			})


		}, function(erro){

			$ionicPopup.alert({
				title : 'Ops!',
				template : 'O servidor continua com erro. Tente mais tarde'
			})

		})





















	}



















})