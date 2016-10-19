angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.agendamentos', {
    url: '/agendamentos',
    views: {
      'tab1': {
        templateUrl: 'templates/agendamentos.html',
        controller: 'AgendamentoController'
      }
    }
  })

  .state('tabsController.fornecedores', {
    url: '/fornecedores',
    views: {
      'tab2': {
        templateUrl: 'templates/fornecedores.html',
        controller: 'FornecedorController'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/agendamentos')

  

});