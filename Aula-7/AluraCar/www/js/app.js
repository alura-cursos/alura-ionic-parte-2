// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'idf.br-filters', 'ngCordova', 'ionic-datepicker'])

.run(function($ionicPlatform, DatabaseValues) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    DatabaseValues.setup();
    DatabaseValues.bancoDeDados.transaction(function(transacao){
      transacao.executeSql('CREATE TABLE IF NOT EXISTS agendamentos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,nome VARCHAR(300), endereco VARCHAR(300), email VARCHAR(300), dataAgendamento VARCHAR(40), modelo VARCHAR(100), preco VARCHAR(50), confirmado BOOLEAN);', [])
    });


















  });
})
