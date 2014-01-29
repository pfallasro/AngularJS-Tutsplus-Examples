angular
	.module('contacts',['ngRoute'])
	.config(function ($routeProvider){
		//Configure the routes
		$routeProvider
			//Edit Contact
			.when('/contact/:index', {
				templateUrl:'edit.html',
				controller:'Edit'
			})
			//Add contact
			.when('/add', {
				templateUrl:'edit.html',
				controller:'Add'
			})
			//Delete contact
			.when('/delete/:index', {
				templateUrl:'edit.html',
				controller:'Delete'
			})
			.when('/', {
				//List all contacts
				templateUrl: 'list.html'
			});
	})
	.controller('Contacts', function($scope){
		//Contacts is the parent controller, so $scope.contacts
		//is available in all children
		$scope.contacts = [
			{name:'Tom', number:'23498234'},
			{name:'Jeffrey', number:'29384723'},
			{name:'Joe', number:'90824987'}
		];
	})
	.controller('Edit', function($scope, $routeParams){
		//Load in a contact from the route (/contact/:index)
		$scope.contact = $scope.contacts[$routeParams.index];
		$scope.index = $routeParams.index;
	})
	.controller('Add', function($scope, $routeParams){
		var length = $scope.contacts.push({
			name: 'New contact',
			number: ''
		});
		$scope.contact = $scope.contacts[length - 1];
		$scope.index = length - 1;
	})
	.controller('Delete', function($scope, $routeParams, $location){
		$scope.contacts.splice($routeParams.index,1);
		$location.path('/').replace();
	});