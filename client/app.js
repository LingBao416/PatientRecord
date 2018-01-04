var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'patController'
		})
		.when('/patients', {
			templateUrl:'templates/list.html',
			controller:'patController'
		})
		.when('/patients/create', {
			templateUrl:'templates/add.html',
			controller:'patController'
		})
		.when('/patients/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'patController'
		})
		.when('/patients/:id/show', {
			templateUrl:'templates/show.html',
			controller:'patController'
		});
});
