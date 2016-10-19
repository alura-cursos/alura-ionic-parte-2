angular.module('starter')
.controller('MenuController', function($rootScope, $scope){

	$scope.usuarioLogado = $rootScope.usuario;

});