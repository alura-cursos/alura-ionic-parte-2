angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope){

	$scope.carroEscolhido = angular.fromJson($stateParams.carro);

	$scope.listaDeAcessorios = [{"nome" : "Freio ABS", "preco": 800},
								{"nome" : "Ar Condicionado", "preco": 1000},
								{"nome" : "MP3 Player" , "preco" : 500}];

	$scope.mudou = function(acessorio, isMarcado){

		if (isMarcado) {
			$scope.carroEscolhido.preco = 
						$scope.carroEscolhido.preco + acessorio.preco;
		} else {
			$scope.carroEscolhido.preco = 
						$scope.carroEscolhido.preco - acessorio.preco;
		}

	};


});