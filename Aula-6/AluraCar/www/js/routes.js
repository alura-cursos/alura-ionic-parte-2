angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('login');

$stateProvider

.state('app', {
	url : '/app',
	templateUrl : 'templates/menu.html',
	abstract: true,
	controller: 'MenuController'
})

.state('app.perfil', {
	url : '/perfil',
	views : {
		'menuContent' : {
			templateUrl : 'templates/perfil.html',
			controller : 'PerfilController'
		}
	}
})

.state('app.listagem',{
	url : '/listagem',
	views : {
		'menuContent' : {
			templateUrl : 'templates/listagem.html',
			controller: 'ListagemController'
		}
	}
})

.state('app.carroescolhido',{
	url : '/carroescolhido/:carro',
	views : {
		'menuContent' : {
			templateUrl: 'templates/carroescolhido.html',
			controller: 'CarroEscolhidoController'
		}
	}
})

.state('app.finalizarpedido',{
	url : '/finalizarpedido/:carro',
	views : {
		'menuContent' : {
			templateUrl : 'templates/finalizarpedido.html',
			controller : 'FinalizarPedidoController'
		}
	}
})























.state('login', {
	url : '/login',
	templateUrl : 'templates/login.html',
	controller : 'LoginController'
})

})