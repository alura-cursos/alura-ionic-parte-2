angular.module('app.controllers', [])
  
.controller('AgendamentoController', function($scope, GerenciadorService){

	$scope.agendamentos = [];

	GerenciadorService.obterAgendamentos().then(function(dados){
		$scope.agendamentos = dados;
	})

})
   
.controller('FornecedorController', function($scope, GerenciadorService){

	$scope.fornecedores = [];

	GerenciadorService.obterFornecedores().then(function(dados){
		$scope.fornecedores = dados;
	})

})
    