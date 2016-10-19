angular.module('starter')
.controller('PerfilController', function($rootScope, $scope, $cordovaCamera){

	$scope.estaEditando = false;
	$scope.textoBotao = 'Editar';

	$scope.usuarioLogado = $rootScope.usuario;

	$scope.tirarFoto = function(){

		var opcoes = {
			correctOrientation:true,
			quality: 70

		}

		$cordovaCamera.getPicture(opcoes).then(function(foto){
			$scope.caminhoFoto = foto;

		}, function(erro){

		})

	}

	$scope.acaoBotao = function(){
		if ($scope.estaEditando) {
			$scope.estaEditando = false;
			$scope.textoBotao = 'Editar';
		} else {
			$scope.estaEditando = true;
			$scope.textoBotao = 'Salvar';


		}
	}

})